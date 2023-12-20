import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class CompanyTrack {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  companyTrackId: number;

  @ManyToOne(() => User, (user) => user.userId)
  userId: User;

  @Column()
  price: number;

  @Column()
  fee: number;
}
