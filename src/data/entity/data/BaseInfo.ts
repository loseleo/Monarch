import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm'

export abstract class BaseInfo {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  createTime: string

  @UpdateDateColumn()
  updateTime: string

  @Column('tinyint')
  state: number = 0
}
