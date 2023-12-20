import { Test, TestingModule } from '@nestjs/testing';
import { TravelRecommendationsController } from './travel_recommendations.controller';
import { TravelRecommendationsService } from './travel_recommendations.service';

describe('TravelRecommendationsController', () => {
  let controller: TravelRecommendationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelRecommendationsController],
      providers: [TravelRecommendationsService],
    }).compile();

    controller = module.get<TravelRecommendationsController>(TravelRecommendationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
