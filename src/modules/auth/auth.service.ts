import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import md5 from 'src/utils/md5'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username)
        if (user && md5(password + user.salt) == user.password) {
            const { id, username } = user
            return {
                id,
                username
            }
        }
        return null
    }

    async login(user: any) {
        const payload = { id: user.id, username: user.username }
        return {
            token: this.jwtService.sign(payload)
        }
    }


}