import { Injectable } from '@nestjs/common';
import { CreateCompanyTrackDto } from './dto/create-company-track.dto';
import { UpdateCompanyTrackDto } from './dto/update-company-track.dto';

@Injectable()
export class CompanyTrackService {
  create(createCompanyTrackDto: CreateCompanyTrackDto) {
    return 'This action adds a new companyTrack';
  }

  findAll() {
    return `This action returns all companyTrack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyTrack`;
  }

  update(id: number, updateCompanyTrackDto: UpdateCompanyTrackDto) {
    return `This action updates a #${id} companyTrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyTrack`;
  }
}
