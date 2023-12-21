import { Controller } from '@nestjs/common';
import { CompanyTrackService } from './company-track.service';

@Controller('company-track')
export class CompanyTrackController {
  constructor(private readonly companyTrackService: CompanyTrackService) {}
}
