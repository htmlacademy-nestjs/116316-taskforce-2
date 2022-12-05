import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SiteUserModule } from './site-user/site-user.module';

@Module({
  imports: [AuthModule, SiteUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
