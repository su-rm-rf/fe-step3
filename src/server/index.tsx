import 'dotenv/config'

import Koa from 'koa'
import KoaStatic from 'koa-static'

import render from './render'

const server = new Koa()

server.use(KoaStatic('dist'))

server.use(async ctx => {
  render(ctx)
})

const PORT:Number = Number(process.env.DEV_PORT)
server.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})