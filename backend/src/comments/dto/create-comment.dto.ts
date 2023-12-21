import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  postId: number;

  @ApiProperty({ required: false })
  parentCommentId?: number;

  @ApiProperty()
  content: string;
}
