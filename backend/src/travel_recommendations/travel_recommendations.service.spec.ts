import { Test, TestingModule } from '@nestjs/testing';
import { TravelRecommendationsService } from './travel_recommendations.service';

describe('TravelRecommendationsService', () => {
  let service: TravelRecommendationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelRecommendationsService],
    }).compile();

    service = module.get<TravelRecommendationsService>(TravelRecommendationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
