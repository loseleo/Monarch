import { ErrorCode } from '../../ErrorCode'

export class BaseResp {
  constructor(r: ErrorCode = ErrorCode.OK, msg = 'ok') {
    if (r != undefined) this.r = r
    if (msg) this.msg = msg
  }
  toString() {
    return JSON.stringify(this)
  }
  uid: number
  r: ErrorCode
  msg: string
  token: string

  total?: number
  start?: number
  count?: number
}
