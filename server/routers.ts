import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createContact, createJobApplication, getAllContacts, getAllJobApplications, getAboutContent, upsertAboutContent, deleteContact, deleteJobApplication } from "./db";
import { storagePut } from "./storage";
import { notifyOwner } from "./_core/notification";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("E-mail inválido"),
        phone: z.string().min(10, "Telefone inválido"),
      }))
      .mutation(async ({ input }) => {
        await createContact({
          name: input.name,
          email: input.email,
          phone: input.phone,
        });

        // Notificar proprietário
        await notifyOwner({
          title: "Novo Contato Recebido",
          content: `Nome: ${input.name}\nE-mail: ${input.email}\nTelefone: ${input.phone}`,
        });

        return { success: true };
      }),
  }),

  jobApplication: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("E-mail inválido"),
        phone: z.string().min(10, "Telefone inválido"),
        resumeFile: z.object({
          name: z.string(),
          type: z.string(),
          data: z.string(), // base64
        }),
      }))
      .mutation(async ({ input }) => {
        // Fazer upload do currículo para S3
        const buffer = Buffer.from(input.resumeFile.data, 'base64');
        const timestamp = Date.now();
        const fileKey = `resumes/${timestamp}-${input.resumeFile.name}`;
        
        const { url } = await storagePut(
          fileKey,
          buffer,
          input.resumeFile.type
        );

        // Salvar no banco de dados
        await createJobApplication({
          name: input.name,
          email: input.email,
          phone: input.phone,
          resumeUrl: url,
          resumeKey: fileKey,
        });

        // Notificar proprietário
        await notifyOwner({
          title: "Nova Candidatura Recebida",
          content: `Nome: ${input.name}\nE-mail: ${input.email}\nTelefone: ${input.phone}\nCurrículo: ${url}`,
        });

        return { success: true };
      }),
  }),

  admin: router({
    // Verificar se é admin
    checkAdmin: protectedProcedure.query(({ ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }
      return { isAdmin: true };
    }),

    // Listar contatos
    listContacts: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }
      return await getAllContacts();
    }),

    // Deletar contato
    deleteContact: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        await deleteContact(input.id);
        return { success: true };
      }),

    // Listar candidaturas
    listJobApplications: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }
      return await getAllJobApplications();
    }),

    // Deletar candidatura
    deleteJobApplication: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        await deleteJobApplication(input.id);
        return { success: true };
      }),

    // Obter informações do fundador
    getAboutContent: publicProcedure.query(async () => {
      return await getAboutContent();
    }),

    // Atualizar informações do fundador
    updateAboutContent: protectedProcedure
      .input(z.object({
        mission: z.string().optional(),
        vision: z.string().optional(),
        ownerPhotoUrl: z.string().optional(),
        ownerPhotoKey: z.string().optional(),
        ownerBio: z.string().max(1500, "Biografia não pode exceder 1500 caracteres").optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        await upsertAboutContent(input);
        return { success: true };
      }),

    // Upload de foto do fundador
    uploadFounderPhoto: protectedProcedure
      .input(z.object({
        imageFile: z.object({
          name: z.string(),
          type: z.string(),
          data: z.string(), // base64
        }),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }

        // Fazer upload da imagem para S3
        const buffer = Buffer.from(input.imageFile.data, 'base64');
        const fileKey = `founder-photo/photo-${Date.now()}.jpg`;
        
        const { url } = await storagePut(
          fileKey,
          buffer,
          input.imageFile.type
        );

        // Atualizar no banco de dados
        await upsertAboutContent({
          ownerPhotoUrl: url,
          ownerPhotoKey: fileKey,
        });

        return { success: true, url };
      }),
  }),
});

export type AppRouter = typeof appRouter;
