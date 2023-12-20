import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  commentId: number;

  @ManyToOne(() => Post, (post) => post.postId)
  postId: Post;

  @Column({ nullable: true })
  parentCommentId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  photoId: number;
}
