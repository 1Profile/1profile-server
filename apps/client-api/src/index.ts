import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.post('/events')

// identify the user
app.post('/identify')

app.post('/users')

serve(
  {
    fetch: app.fetch,
    port: (process.env.PORT || 3000) as number,
  },
  (add) => {
    console.log(`[💡] Server running on ${add.port}`)
  }
)
