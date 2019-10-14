import {
  Entity,
  Column
} from 'typeorm'
import { BaseInfo } from './BaseInfo'

@Entity()
export class UserInfo extends BaseInfo {
  
  @Column('varchar', { length: 50 })
  name: string

}
