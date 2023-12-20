import { Test, TestingModule } from '@nestjs/testing';
import { CompanyServiceController } from './company-service.controller';
import { CompanyServiceService } from './company-service.service';

describe('CompanyServiceController', () => {
  let controller: CompanyServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyServiceController],
      providers: [CompanyServiceService],
    }).compile();

    controller = module.get<CompanyServiceController>(CompanyServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
