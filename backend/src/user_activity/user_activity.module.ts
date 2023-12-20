import { Module } from '@nestjs/common';
import { UserActivityService } from './user_activity.service';
import { UserActivityController } from './user_activity.controller';

@Module({
  controllers: [UserActivityController],
  providers: [UserActivityService],
})
export class UserActivityModule {}
