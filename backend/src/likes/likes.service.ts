import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { User } from '../users/entities/user.entity';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private likesRepository: Repository<Like>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async create(createLikeDto: CreateLikeDto, user: User): Promise<Like> {
    const { postId, commentId } = createLikeDto;

    const like = this.likesRepository.create({ userId: user });

    if (postId) {
      const post = await this.postsRepository.findOneBy({ postId });
      if (!post) {
        throw new Error('Post not found');
      }
      like.postId = post;
    } else if (commentId) {
      const comment = await this.commentsRepository.findOneBy({ commentId });
      if (!comment) {
        throw new Error('Comment not found');
      }
      like.commentId = comment;
    } else {
      throw new Error('Post ID or Comment ID must be provided');
    }

    return this.likesRepository.save(like);
  }
}
