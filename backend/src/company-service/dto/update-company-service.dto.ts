import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyServiceDto } from './create-company-service.dto';

export class UpdateCompanyServiceDto extends PartialType(CreateCompanyServiceDto) {}
