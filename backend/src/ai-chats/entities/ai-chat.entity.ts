import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class AiChat {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  chatId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'text' })
  response: string;

  @CreateDateColumn()
  createdAt: Date;
}
