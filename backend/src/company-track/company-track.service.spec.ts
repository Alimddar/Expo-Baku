import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTrackService } from './company-track.service';

describe('CompanyTrackService', () => {
  let service: CompanyTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyTrackService],
    }).compile();

    service = module.get<CompanyTrackService>(CompanyTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
