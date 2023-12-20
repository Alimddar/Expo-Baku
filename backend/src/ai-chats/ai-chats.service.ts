import { Injectable } from '@nestjs/common';
import { CreateAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';

@Injectable()
export class AiChatsService {
  create(createAiChatDto: CreateAiChatDto) {
    return 'This action adds a new aiChat';
  }

  findAll() {
    return `This action returns all aiChats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiChat`;
  }

  update(id: number, updateAiChatDto: UpdateAiChatDto) {
    return `This action updates a #${id} aiChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiChat`;
  }
}
