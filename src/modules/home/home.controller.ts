import { Controller, Get, Post } from '@nestjs/common'
import { HomeService } from './home.service'

@Controller()
export class HomeController {

    constructor(
        private readonly homeService: HomeService,
    ) {}

    @Get()
    home(): string {
        return this.homeService.sayHi()
    }
}