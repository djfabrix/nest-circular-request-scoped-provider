import { Module, forwardRef, Scope } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    forwardRef(() => CompanyModule)
  ],
  providers: [
    UserService,
    {
      provide: 'FAKE_REQUEST_SCOPED_PROVIDER',  
      scope: Scope.REQUEST,    
      useFactory: () => {
        return "Dummy String";
      }
    }
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
