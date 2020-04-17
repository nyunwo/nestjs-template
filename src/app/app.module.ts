import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
//import { MyGraphQLModule } from '../graphql/graphql.module'
import { HomeModule } from 'src/modules/home/home.module'
import { UserModule } from 'src/modules/user/user.module'
import { AuthModule } from 'src/modules/auth/auth.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ConfigModule,
        //MyGraphQLModule, // Graphql功能，需要时启用
        HomeModule,
        UserModule,
        AuthModule,
    ],
    controllers: [],
    providers: [ConfigService],
})

export class AppModule { }
