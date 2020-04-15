import { Injectable } from '@nestjs/common'
import { UserService } from './user.service'

@Injectable()
export class HomeService {
    constructor(
        private readonly userService: UserService
    ){}
    async sayHi(){
        // let user = await this.userService.findByUsername('Tom')
        // console.log('users:', user)

        // let r = await this.userService.addUser('Tom')
        // console.log('r:', r)

        let r = await this.userService.updatePasswd('Tom', '1243')
        console.log(r)
        return 'Hello Nest'
    }
}

