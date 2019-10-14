import { FindConditions, Repository, FindManyOptions } from 'typeorm'
import Monarch from '../../Monarch'

export class BaseDao<T> {
  repository: Repository<T> = null
  entity: any
  isLog: boolean
  init(entity?: any, isLog = false) {
    this.entity = entity
    this.isLog = isLog
    return this
  }
  getRepository() {
    if (this.repository) return this.repository
    else {
      this.repository = Monarch.conn[this.isLog ? 1 : 0].getRepository(
        this.entity,
      )
      return this.repository
    }
  }
  async find(condition?: FindConditions<T>): Promise<T[]> {
    if (!this.getRepository()) return null
    return await this.getRepository().find(condition)
  }
  async findOptions(options?: FindManyOptions<T>) {
    if (!this.getRepository()) return null
    return await this.getRepository().find(options)
  }
  async findOne(condition: FindConditions<T>): Promise<T> {
    if (!this.getRepository()) return null
    return await this.getRepository().findOne(condition)
  }
  async findOneOptions(options?: FindManyOptions<T>): Promise<T> {
    if (!this.getRepository()) return null
    return await this.getRepository().findOne(options)
  }
  async add(info: T) {
    if (!this.getRepository()) return null
    return await this.getRepository().save(info)
  }
  async addAll(books: T[]) {
    if (!this.getRepository()) return null
    return await this.getRepository().save(books)
  }
  async count(condition?: FindConditions<T>): Promise<number> {
    if (!this.getRepository()) return null
    return await this.getRepository().count(condition)
  }
  async update(book: T) {
    return this.add(book)
  }
  async save(book: T) {
    return this.add(book)
  }
}
