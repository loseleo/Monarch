import * as Router from 'koa-router'
import { BaseServer, BaseReq } from './BaseServer'
import UserInfoDao from '../data/dao/UserInfoDao'
import Monarch from '../Monarch'
import { BaseResp } from './entity/BaseResp'
import { ErrorCode } from '../ErrorCode'


interface UserLoginReq extends BaseReq {
  name: string
}

class UserServer extends BaseServer {
  init(router: Router) {
    router.post('/api/login', async ctx => {
      await this.onUserLogin(ctx)
    })

  }

  async onUserLogin(ctx: any) {
    const req: UserLoginReq = ctx.request.body
    let User = await UserInfoDao.findOne({ name: req.name })
    if (User) {
      const resp = new BaseResp()
      resp.uid = User.id
      ctx.response.body = resp
    } else {

      Monarch.logger.error(this, `onUserLogin No App,User =${req}`)
      ctx.response.body = new BaseResp(
        ErrorCode.ERROR_PARAM,
        'app不存在,请检查appid',
      )

    }
  }

}
export default new UserServer()
