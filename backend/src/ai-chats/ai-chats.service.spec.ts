import { Test, TestingModule } from '@nestjs/testing';
import { AiChatsService } from './ai-chats.service';

describe('AiChatsService', () => {
  let service: AiChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiChatsService],
    }).compile();

    service = module.get<AiChatsService>(AiChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
