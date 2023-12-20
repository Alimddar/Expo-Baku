import { Injectable } from '@nestjs/common';
import { CreateTravelRecommendationDto } from './dto/create-travel_recommendation.dto';
import { UpdateTravelRecommendationDto } from './dto/update-travel_recommendation.dto';

@Injectable()
export class TravelRecommendationsService {
  create(createTravelRecommendationDto: CreateTravelRecommendationDto) {
    return 'This action adds a new travelRecommendation';
  }

  findAll() {
    return `This action returns all travelRecommendations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travelRecommendation`;
  }

  update(id: number, updateTravelRecommendationDto: UpdateTravelRecommendationDto) {
    return `This action updates a #${id} travelRecommendation`;
  }

  remove(id: number) {
    return `This action removes a #${id} travelRecommendation`;
  }
}
