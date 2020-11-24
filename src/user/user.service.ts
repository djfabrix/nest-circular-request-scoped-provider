import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
@Injectable()
export class UserService {

    constructor(
        @Inject(forwardRef(() => CompanyService))
        private companyService: CompanyService,
        @Inject('FAKE_REQUEST_SCOPED_PROVIDER') private fakeProvider: string,
    ) {
        console.log("UserService Constructor");
    }

    async getUsers() {
        console.log("getCompanies function");
        
        if (!this.companyService) {
            throw new HttpException("this.companyService is undefined", 500)
        }

        const dummyData = [
            {name: 'fake1'},
            {name: 'fake2'},
            {name: 'fake3'}
        ];

        return dummyData;
    }

}
