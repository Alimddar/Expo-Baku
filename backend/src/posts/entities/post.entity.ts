import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  postId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column({ type: 'text' })
  title: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  videoId: number;

  @Column({ nullable: true })
  photoId: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  locationId: number;
}
