import { Controller, Get, Post, Body, Request, UseFilters, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import md5 from 'src/utils/md5'
import { randStr } from 'src/utils/tools'
import { AuthGuard } from '@nestjs/passport'
import { User, Role } from 'src/entities'

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) { }

    @Post('register')
    async register(@Body('username') username: string, @Body('password') password: string): Promise<any> {
        if (username.length < 3 || password.length < 6) {
            throw '用户名或密码不符合规则'
        }

        const salt = randStr(16)
        const passwordEncrypted = md5(password + salt)
        await this.userService.addUser(username, passwordEncrypted, salt)
        return {}
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async profile(@Request() req){
        return req.user
    }
}