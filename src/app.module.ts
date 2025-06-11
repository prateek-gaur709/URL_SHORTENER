import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UrlModule } from './url/url.module';

@Module({
  imports: [UsersModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
