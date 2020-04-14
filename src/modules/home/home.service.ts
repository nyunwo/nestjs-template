import { Injectable } from '@nestjs/common'
import { UserService } from './user.service'

@Injectable()
export class HomeService {
    constructor(
        private readonly userService: UserService
    ){}
    async sayHi(){
        let users = await this.userService.findByUsername('Tom')
        console.log('users:', users)
        return 'Hello Nest'
    }
}

