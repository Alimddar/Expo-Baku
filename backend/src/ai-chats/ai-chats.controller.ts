import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiChatsService } from './ai-chats.service';
import { CreateAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';

@Controller('ai-chats')
export class AiChatsController {
  constructor(private readonly aiChatsService: AiChatsService) {}

  @Post()
  create(@Body() createAiChatDto: CreateAiChatDto) {
    return this.aiChatsService.create(createAiChatDto);
  }

  @Get()
  findAll() {
    return this.aiChatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiChatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiChatDto: UpdateAiChatDto) {
    return this.aiChatsService.update(+id, updateAiChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiChatsService.remove(+id);
  }
}
