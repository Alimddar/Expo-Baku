import { PartialType } from '@nestjs/mapped-types';
import { CreateSavedPostDto } from './create-saved_post.dto';

export class UpdateSavedPostDto extends PartialType(CreateSavedPostDto) {}
