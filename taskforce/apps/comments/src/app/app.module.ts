import { Module } from '@nestjs/common';

import { TaskCommentController } from './task-comment/task-comment.controller';
import { TaskCommentService } from './task-comment/task-comment.service';
import { TaskCommentModule } from './task-comment/task-comment.module';
import { TaskCommentMemoryRepository } from './task-comment/task-comment-memory-repository';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from './app.constants';
import databaseConfig from '../config/database.config';
import envSchema from './env.schema';
import {MongooseModule} from '@nestjs/mongoose';
import {getMongoDbConfig} from '../config/mongodb.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
      validationSchema: envSchema
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    TaskCommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
