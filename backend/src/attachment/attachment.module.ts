import { Module } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { AttachmentController } from './attachment.controller';

@Module({
  controllers: [AttachmentController],
  providers: [AttachmentService],
})
export class AttachmentModule {}
