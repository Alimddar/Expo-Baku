import { Module } from '@nestjs/common';
import { TravelRecommendationsService } from './travel_recommendations.service';
import { TravelRecommendationsController } from './travel_recommendations.controller';

@Module({
  controllers: [TravelRecommendationsController],
  providers: [TravelRecommendationsService],
})
export class TravelRecommendationsModule {}
