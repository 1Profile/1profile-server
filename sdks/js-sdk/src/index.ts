import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from 'client-api'

const oneProfileClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8787/trpc',
    }),
  ],
})
