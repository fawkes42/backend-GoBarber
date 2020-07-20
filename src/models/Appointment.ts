import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

import User from './User'

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: String

  @Column()
  providerId: String

  @ManyToOne(() => User)
  @JoinColumn({ name: 'providerId' })
  provider: User

  @Column('timestamp with time zone')
  date: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default Appointment
