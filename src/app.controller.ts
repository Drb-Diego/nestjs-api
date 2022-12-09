import { Body, Controller, Post } from '@nestjs/common';
import { ICreateUserBody } from './@types';
import AppModel from './app.model';

@Controller('users')
export class AppController {
  constructor(private appModel: AppModel) {}

  @Post('create')
  async createUser(@Body() body: ICreateUserBody) {
    const { name, userFunction } = body;

    const userCreated = await this.appModel.create({ name, userFunction });

    return userCreated;
  }
}
