import { Test, TestingModule } from '@nestjs/testing';
import { CompanyServiceService } from './company-service.service';

describe('CompanyServiceService', () => {
  let service: CompanyServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyServiceService],
    }).compile();

    service = module.get<CompanyServiceService>(CompanyServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
