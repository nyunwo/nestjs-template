import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

@Injectable()
export class HomeService {
    constructor(
        private readonly userService: UserService
    ){}
    async sayHi(){
        return 'Hello Nest'
    }
}

