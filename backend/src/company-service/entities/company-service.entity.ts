import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CompanyService {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  companyServiceId: number;

  @Column()
  serviceName: string;

  @Column()
  photoIds: number;

  @Column()
  videoIds: number;
}
