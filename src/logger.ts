import * as log4js from 'log4js'
log4js.configure('./log4js.json')
export default class Logger {
  private _loggerF = log4js.getLogger('rule-file')
  private _loggerE = log4js.getLogger('rule-error')
  private _loggerD = log4js.getLogger('rule-console')
  getTag(target: object) {
    return target.constructor.name
  }
  info(target: object, msg: any) {
    let msgOut = msg
    if (typeof msg === 'object') {
      msgOut = JSON.stringify(msg)
    }
    this._loggerF.info(`${this.getTag(target)}:${msgOut}`)
  }
  debug(target: object, msg: any) {
    let msgOut = msg
    if (typeof msg === 'object') {
      msgOut = JSON.stringify(msg)
    }
    this._loggerD.info(`${this.getTag(target)}:${msgOut}`)
  }
  error(target: object, msg: any) {
    let msgOut = msg
    if (typeof msg === 'object') {
      msgOut = JSON.stringify(msg)
    }
    this._loggerE.info(`${this.getTag(target)}:${msgOut}`)
  }
}
