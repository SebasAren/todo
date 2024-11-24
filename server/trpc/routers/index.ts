import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../trpc";

export const appRouter = router({});

// export type definition of API
export type AppRouter = typeof appRouter;
