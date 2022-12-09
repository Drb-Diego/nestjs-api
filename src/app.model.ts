import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { ICreateUserBody } from './@types';
import { PrismaService } from './database/prisma.service';

@Injectable()
class AppModel {
  constructor(private prisma: PrismaService) {}

  async create({ name, userFunction }: ICreateUserBody): Promise<Users> {
    const userCreated = await this.prisma.users.create({
      data: {
        name: name,
        function: userFunction,
      },
    });

    return userCreated;
  }
}

export default AppModel;
