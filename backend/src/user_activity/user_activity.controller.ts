import { Controller } from '@nestjs/common';
import { UserActivityService } from './user_activity.service';

@Controller('user-activity')
export class UserActivityController {
  constructor(private readonly userActivityService: UserActivityService) {}
}
