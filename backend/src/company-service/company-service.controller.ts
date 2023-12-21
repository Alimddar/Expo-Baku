import { Controller } from '@nestjs/common';
import { CompanyServiceService } from './company-service.service';

@Controller('company-service')
export class CompanyServiceController {
  constructor(private readonly companyServiceService: CompanyServiceService) {}
}
