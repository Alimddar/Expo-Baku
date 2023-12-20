import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  companyId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column()
  customersId: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;
}
