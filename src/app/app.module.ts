import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { MyGraphQLModule } from '../graphql/graphql.module'

@Module({
    imports: [
        ConfigModule,
        MyGraphQLModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
