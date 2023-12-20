import { PartialType } from '@nestjs/mapped-types';
import { CreateAiChatDto } from './create-ai-chat.dto';

export class UpdateAiChatDto extends PartialType(CreateAiChatDto) {}
