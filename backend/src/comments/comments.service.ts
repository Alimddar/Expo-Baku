import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from '../users/entities/user.entity';
import { Post } from '../posts/entities/post.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(
    createCommentDto: CreateCommentDto,
    user: User,
  ): Promise<Comment> {
    const { postId, parentCommentId, content } = createCommentDto;

    const post = await this.postsRepository.findOneBy({ postId });
    if (!post) {
      throw new Error('Post not found');
    }

    if (parentCommentId) {
      const parentComment = await this.commentsRepository.findOneBy({
        commentId: parentCommentId,
      });
      if (!parentComment || parentComment.postId.postId !== postId) {
        throw new Error('Invalid parent comment');
      }
    }

    const newComment = this.commentsRepository.create({
      postId: post,
      userId: user,
      parentCommentId,
      content,
    });

    return this.commentsRepository.save(newComment);
  }
}
