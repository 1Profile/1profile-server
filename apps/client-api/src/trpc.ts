import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const t = initTRPC.create()
const publicProcedure = t.procedure
const router = t.router

export const appRouter = router({
  trackEvent: publicProcedure
    .input(
      z.object({
        eventName: z.string(),
        eventProperties: z.record(z.string()).optional(),
        userId: z.string().optional(),
      })
    )
    .mutation((opts) => {}),
})

export type AppRouter = typeof appRouter
