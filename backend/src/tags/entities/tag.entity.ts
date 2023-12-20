import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  tagId: number;

  @ManyToOne(() => Post, (post) => post.postId)
  postId: Post;

  @Column()
  tagName: string;
}
