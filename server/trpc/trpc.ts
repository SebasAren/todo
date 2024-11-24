/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { Context } from "~/server/trpc/context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

/**
 * Unprotected procedure
 */
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;

// protected procedure
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  // to simplify the user models we'll just use email as a unique identifier
  // this is a horrible idea for any actual applications.
  if (ctx.session?.user?.email) {
    return next({ ctx: { ...ctx, email: ctx.session.user.email } });
  } else {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
});
