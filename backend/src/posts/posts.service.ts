import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, user: User): Promise<Post> {
    const newPost = this.postsRepository.create({
      ...createPostDto,
      user: user,
    });

    if (!newPost.title || !newPost.content) {
      throw new Error('Missing required fields');
    }

    return this.postsRepository.save(newPost);
  }
}
