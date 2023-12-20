import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavedPostsService } from './saved_posts.service';
import { CreateSavedPostDto } from './dto/create-saved_post.dto';
import { UpdateSavedPostDto } from './dto/update-saved_post.dto';

@Controller('saved-posts')
export class SavedPostsController {
  constructor(private readonly savedPostsService: SavedPostsService) {}

  @Post()
  create(@Body() createSavedPostDto: CreateSavedPostDto) {
    return this.savedPostsService.create(createSavedPostDto);
  }

  @Get()
  findAll() {
    return this.savedPostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savedPostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavedPostDto: UpdateSavedPostDto) {
    return this.savedPostsService.update(+id, updateSavedPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savedPostsService.remove(+id);
  }
}
