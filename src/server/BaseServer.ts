import * as Router from 'koa-router'

export interface BaseReq {
}
export interface BaseListReq {
  start: number
  count: number
}
export abstract class BaseServer {
  abstract init(router: Router): void
}
