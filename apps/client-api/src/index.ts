import { serve } from '@hono/node-server'
import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'
import { appRouter } from './trpc'

const app = new Hono()

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
  })
)

serve(
  {
    fetch: app.fetch,
    port: (process.env.PORT || 3000) as number,
  },
  (add) => {
    console.log(`[💡] Server running on ${add.port}`)
  }
)

export * from './trpc'
