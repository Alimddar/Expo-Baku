import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTrackController } from './company-track.controller';
import { CompanyTrackService } from './company-track.service';

describe('CompanyTrackController', () => {
  let controller: CompanyTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyTrackController],
      providers: [CompanyTrackService],
    }).compile();

    controller = module.get<CompanyTrackController>(CompanyTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
