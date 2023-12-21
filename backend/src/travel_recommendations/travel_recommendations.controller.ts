import { Controller } from '@nestjs/common';
import { TravelRecommendationsService } from './travel_recommendations.service';

@Controller('travel-recommendations')
export class TravelRecommendationsController {
  constructor(private readonly travelRecommendationsService: TravelRecommendationsService) {}
}
