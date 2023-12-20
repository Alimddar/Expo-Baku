import { Injectable } from '@nestjs/common';
import { CreateCompanyServiceDto } from './dto/create-company-service.dto';
import { UpdateCompanyServiceDto } from './dto/update-company-service.dto';

@Injectable()
export class CompanyServiceService {
  create(createCompanyServiceDto: CreateCompanyServiceDto) {
    return 'This action adds a new companyService';
  }

  findAll() {
    return `This action returns all companyService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyService`;
  }

  update(id: number, updateCompanyServiceDto: UpdateCompanyServiceDto) {
    return `This action updates a #${id} companyService`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyService`;
  }
}
