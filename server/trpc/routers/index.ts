import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const appRouter = router({
  getTodos: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany({
      where: { userEmail: { equals: ctx.email } },
    });
  }),
  createTodo: protectedProcedure
    .input(z.string())
    .mutation(({ ctx, input }) => {
      console.log(input);
      return ctx.prisma.todo.create({
        data: {
          userEmail: ctx.email,
          description: input,
        },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
