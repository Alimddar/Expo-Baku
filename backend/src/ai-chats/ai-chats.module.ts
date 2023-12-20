import { Module } from '@nestjs/common';
import { AiChatsService } from './ai-chats.service';
import { AiChatsController } from './ai-chats.controller';

@Module({
  controllers: [AiChatsController],
  providers: [AiChatsService],
})
export class AiChatsModule {}
