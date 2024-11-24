import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const appRouter = router({
  getTodos: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany({
      where: { userEmail: { equals: ctx.email } },
      select: { id: true, description: true, completedDate: true },
    });
  }),
  createTodo: protectedProcedure
    .input(z.string())
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todo.create({
        data: {
          userEmail: ctx.email,
          description: input,
        },
      });
    }),
  finishTodo: protectedProcedure
    .input(z.string())
    .mutation(({ input, ctx }) => {
      return ctx.prisma.todo.update({
        where: {
          // make sure to also check if the user is deleting his own todo and not someone else's
          userEmail: ctx.email,
          id: input,
        },
        data: {
          completedDate: new Date(),
        },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
