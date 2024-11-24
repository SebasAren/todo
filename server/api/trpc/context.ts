import type { H3Event } from "h3";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = async (event: H3Event) => {
  return { prisma: event.context.prisma };
};
export type Context = inferAsyncReturnType<typeof createContext>;
