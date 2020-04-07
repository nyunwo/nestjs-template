import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '../config/config.service'
import { MyGraphQLModule } from '../graphql/graphql.module'

@Module({
    imports: [
        MyGraphQLModule
    ],
    controllers: [AppController],
    providers: [AppService, ConfigService],
})
export class AppModule { }
