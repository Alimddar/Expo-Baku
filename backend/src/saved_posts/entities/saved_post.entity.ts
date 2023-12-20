import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity()
export class SavedPost {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  savedPostId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @ManyToOne(() => Post, (post) => post.postId)
  postId: Post;

  @CreateDateColumn()
  savedAt: Date;
}
