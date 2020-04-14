import { Controller, Get, Post } from '@nestjs/common'
import { HomeService } from './home.service'
import { User } from 'src/entities/user.entity'

@Controller()
export class HomeController {

    constructor(
        private readonly homeService: HomeService,
    ) { }

    @Get()
    async home(): Promise<string> {
        // let user = new User()
        // user.username = 'Tim'
        // user.password = '123'
        // user.age = 5
        // user.save()
        // User.create({
        //     username: 'Mary',
        //     password: '123',
        //     age: 10
        // })

        // let users = await User.find()
        // console.log(JSON.stringify(users))

        


        return this.homeService.sayHi()
    }
}