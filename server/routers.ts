import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContact, createJobApplication } from "./db";
import { storagePut } from "./storage";
import { notifyOwner } from "./_core/notification";

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
});

export type AppRouter = typeof appRouter;
