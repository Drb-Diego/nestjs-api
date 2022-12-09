import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import AppModel from './app.model';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: AppModel,
      useClass: AppModel,
    },
  ],
})
export class AppModule {}
