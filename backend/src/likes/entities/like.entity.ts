import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';
import { Comment } from '../../comments/entities/comment.entity';

@Entity()
export class Like {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  likeId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @ManyToOne(() => Post, (post) => post.postId)
  postId: Post;

  @ManyToOne(() => Comment, (comment) => comment.commentId)
  commentId: Comment;

  @CreateDateColumn()
  createdAt: Date;
}
