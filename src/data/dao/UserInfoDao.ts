import { UserInfo } from '../entity/data/UserInfo'
import { BaseDao } from './BaseDao'

class UserInfoDao extends BaseDao<UserInfo> {}
export default new UserInfoDao().init(UserInfo)
