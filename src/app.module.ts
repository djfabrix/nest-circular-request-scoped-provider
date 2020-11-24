import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [CompanyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
