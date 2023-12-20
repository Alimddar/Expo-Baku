import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelRecommendationsService } from './travel_recommendations.service';
import { CreateTravelRecommendationDto } from './dto/create-travel_recommendation.dto';
import { UpdateTravelRecommendationDto } from './dto/update-travel_recommendation.dto';

@Controller('travel-recommendations')
export class TravelRecommendationsController {
  constructor(private readonly travelRecommendationsService: TravelRecommendationsService) {}

  @Post()
  create(@Body() createTravelRecommendationDto: CreateTravelRecommendationDto) {
    return this.travelRecommendationsService.create(createTravelRecommendationDto);
  }

  @Get()
  findAll() {
    return this.travelRecommendationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelRecommendationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTravelRecommendationDto: UpdateTravelRecommendationDto) {
    return this.travelRecommendationsService.update(+id, updateTravelRecommendationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelRecommendationsService.remove(+id);
  }
}
