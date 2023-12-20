import { Module } from '@nestjs/common';
import { CompanyTrackService } from './company-track.service';
import { CompanyTrackController } from './company-track.controller';

@Module({
  controllers: [CompanyTrackController],
  providers: [CompanyTrackService],
})
export class CompanyTrackModule {}
