import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyServiceService } from './company-service.service';
import { CreateCompanyServiceDto } from './dto/create-company-service.dto';
import { UpdateCompanyServiceDto } from './dto/update-company-service.dto';

@Controller('company-service')
export class CompanyServiceController {
  constructor(private readonly companyServiceService: CompanyServiceService) {}

  @Post()
  create(@Body() createCompanyServiceDto: CreateCompanyServiceDto) {
    return this.companyServiceService.create(createCompanyServiceDto);
  }

  @Get()
  findAll() {
    return this.companyServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyServiceDto: UpdateCompanyServiceDto) {
    return this.companyServiceService.update(+id, updateCompanyServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyServiceService.remove(+id);
  }
}
