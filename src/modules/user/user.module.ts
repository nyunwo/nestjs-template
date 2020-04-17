import { Module } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User, Role } from 'src/entities'
import { UserController } from './user.controller'

@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule { }