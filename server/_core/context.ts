import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch (error) {
    // Authentication is optional for public procedures.
    // Silenciar erro de OAuth não configurado
    if (error instanceof Error && (error.message === "OAuth not configured" || error.message?.includes('OAUTH_SERVER_URL'))) {
      console.warn('[Auth] OAuth não configurado, continuando sem autenticação');
    } else {
      // Para outros erros, logar normalmente
      console.warn('[Auth] Falha na autenticação:', error);
    }
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
