import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SiteUserModule } from './site-user/site-user.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from './app.constant';
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
    AuthModule,
    SiteUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
