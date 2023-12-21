import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeDto {
  @ApiProperty({ required: false })
  postId?: number;

  @ApiProperty({ required: false })
  commentId?: number;
}
