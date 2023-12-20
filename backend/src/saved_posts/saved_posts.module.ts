import { Module } from '@nestjs/common';
import { SavedPostsService } from './saved_posts.service';
import { SavedPostsController } from './saved_posts.controller';

@Module({
  controllers: [SavedPostsController],
  providers: [SavedPostsService],
})
export class SavedPostsModule {}
