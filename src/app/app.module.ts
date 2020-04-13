import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { MyGraphQLModule } from '../graphql/graphql.module'
import { HomeModule } from 'src/modules/home/home.module'

@Module({
    imports: [
        ConfigModule,
        //MyGraphQLModule, // Graphql功能，需要时启用
        HomeModule,
    ],
    controllers: [],
    providers: [ConfigService],
})

export class AppModule { }
