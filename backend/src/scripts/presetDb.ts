import { env } from '../lib/env'
import { type AppContext } from '../lib/ctx'
import { getPasswordHash } from '../utils/getPasswordHash'

export const presetDb = async (ctx: AppContext) => {
  await ctx.prisma.user.upsert({
    where: {
      nick: 'admin1',
    },
    create: {
      nick: 'admin1',
      email: 'admin@example.com',
      password: getPasswordHash(env.INITIAL_ADMIN_PASSWORD),
      permissions: ['ALL'],
    },
    update: {
      permissions: ['ALL'],
    },
  })
}
