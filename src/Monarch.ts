import Logger from './logger'
import { Connection } from 'typeorm'

class Monarch {
  conn: Connection[] = null
  logger: Logger = new Logger()
}
export default new Monarch()
