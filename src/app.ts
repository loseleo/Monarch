import * as Koa from 'koa'
import { createConnections } from 'typeorm'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import UserServer from './server/UserServer'
import Monarch from './Monarch'
const app = new Koa()
const router = new Router()

const cross = async (ctx: any, next: any) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
  ctx.set(
    'Access-Control-Allow-Headers',
    'x-requested-with, accept, origin, content-type',
  )
  ctx.set('Content-Type', 'application/json;charset=utf-8')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Max-Age', 300)
  ctx.set('Access-Control-Expose-Headers', 'myData')

  await next()
}
//InitServer
createConnections().then(async connection => {
  Monarch.conn = connection
 
  //Regist router
  UserServer.init(router)
  app
    .use(bodyParser())
    .use(router.routes())
})

export default app
