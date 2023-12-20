import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class UserActivity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  activityId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column({ type: 'enum', enum: ['activityType1', 'activityType2'] })
  activityType: string;

  @Column()
  referenceId: number;

  @CreateDateColumn()
  createdAt: Date;
}
