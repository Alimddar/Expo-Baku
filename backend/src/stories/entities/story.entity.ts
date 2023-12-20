import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Story {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  storyId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column()
  photoUrl: string;

  @Column()
  videoUrl: string;

  @Column()
  locationId: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'datetime' })
  expiresAt: Date;
}
