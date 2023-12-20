import { Injectable } from '@nestjs/common';
import { CreateUserActivityDto } from './dto/create-user_activity.dto';
import { UpdateUserActivityDto } from './dto/update-user_activity.dto';

@Injectable()
export class UserActivityService {
  create(createUserActivityDto: CreateUserActivityDto) {
    return 'This action adds a new userActivity';
  }

  findAll() {
    return `This action returns all userActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userActivity`;
  }

  update(id: number, updateUserActivityDto: UpdateUserActivityDto) {
    return `This action updates a #${id} userActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} userActivity`;
  }
}
