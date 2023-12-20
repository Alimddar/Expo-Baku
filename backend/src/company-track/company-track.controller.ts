import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyTrackService } from './company-track.service';
import { CreateCompanyTrackDto } from './dto/create-company-track.dto';
import { UpdateCompanyTrackDto } from './dto/update-company-track.dto';

@Controller('company-track')
export class CompanyTrackController {
  constructor(private readonly companyTrackService: CompanyTrackService) {}

  @Post()
  create(@Body() createCompanyTrackDto: CreateCompanyTrackDto) {
    return this.companyTrackService.create(createCompanyTrackDto);
  }

  @Get()
  findAll() {
    return this.companyTrackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyTrackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyTrackDto: UpdateCompanyTrackDto) {
    return this.companyTrackService.update(+id, updateCompanyTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyTrackService.remove(+id);
  }
}
