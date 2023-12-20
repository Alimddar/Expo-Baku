import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TravelRecommendation {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  recommendationId: number;

  @Column({ type: 'enum', enum: ['type1', 'type2'] })
  type: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  locationId: number;
}
