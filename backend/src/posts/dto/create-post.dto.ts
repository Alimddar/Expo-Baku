import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  videoId?: number;
  @ApiProperty()
  photoId?: number;
  @ApiProperty()
  locationId?: number;
}
