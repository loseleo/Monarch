import { Entity, Column } from 'typeorm'
import { BaseLog } from './BaseLog'


@Entity()
export class UserLog extends BaseLog {
  @Column('varchar', { length: 20 })
  date: string = null
}
