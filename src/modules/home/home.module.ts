import { Module } from '@nestjs/common'
import { HomeController } from './home.controller'
import { HomeService } from './home.service'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [ HomeController ],
    providers: [ HomeService, UserService ],
})
export class HomeModule {}