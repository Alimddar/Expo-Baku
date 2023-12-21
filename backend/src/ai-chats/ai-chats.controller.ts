import { Controller } from '@nestjs/common';
import { AiChatsService } from './ai-chats.service';

@Controller('ai-chats')
export class AiChatsController {
  constructor(private readonly aiChatsService: AiChatsService) {}
}
