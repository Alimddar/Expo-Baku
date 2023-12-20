import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelRecommendationDto } from './create-travel_recommendation.dto';

export class UpdateTravelRecommendationDto extends PartialType(CreateTravelRecommendationDto) {}
