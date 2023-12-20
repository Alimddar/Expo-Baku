import { Module } from '@nestjs/common';
import { CompanyServiceService } from './company-service.service';
import { CompanyServiceController } from './company-service.controller';

@Module({
  controllers: [CompanyServiceController],
  providers: [CompanyServiceService],
})
export class CompanyServiceModule {}
