import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  billingId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column({ type: 'enum', enum: ['subscriptionType1', 'subscriptionType2'] })
  subscriptionType: string;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;
}
