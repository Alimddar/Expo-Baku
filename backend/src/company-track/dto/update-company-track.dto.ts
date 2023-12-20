import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyTrackDto } from './create-company-track.dto';

export class UpdateCompanyTrackDto extends PartialType(CreateCompanyTrackDto) {}
