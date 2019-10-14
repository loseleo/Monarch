import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

export abstract class BaseLog {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  createTime: string
}
