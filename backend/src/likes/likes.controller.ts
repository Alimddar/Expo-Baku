import { Controller, Post, Body, Req } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @ApiBearerAuth('JWT-auth')
  @Post()
  async create(@Body() createLikeDto: CreateLikeDto, @Req() req) {
    return this.likesService.create(createLikeDto, req.user);
  }
}
