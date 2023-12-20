import { Test, TestingModule } from '@nestjs/testing';
import { AiChatsController } from './ai-chats.controller';
import { AiChatsService } from './ai-chats.service';

describe('AiChatsController', () => {
  let controller: AiChatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiChatsController],
      providers: [AiChatsService],
    }).compile();

    controller = module.get<AiChatsController>(AiChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
