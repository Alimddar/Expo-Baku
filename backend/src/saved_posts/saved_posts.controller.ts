import { Controller } from '@nestjs/common';
import { SavedPostsService } from './saved_posts.service';

@Controller('saved-posts')
export class SavedPostsController {
  constructor(private readonly savedPostsService: SavedPostsService) {}
}
