import { UserService } from 'src/user/user.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
    
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService
    ) {
        console.log("CompanyService Constructor");
    }

    async getCompanies() {

        console.log("getCompanies function");
        console.log(this.userService);
        const dummyData = [
            {name: 'fake1'},
            {name: 'fake2'},
            {name: 'fake3'}
        ];

        return dummyData;
    }
}
