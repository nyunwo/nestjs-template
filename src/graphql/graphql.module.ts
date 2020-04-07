import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql'
import { GqlConfigService } from "./graphql.cfg.service";
import { ConfigService } from "../config/config.service";
import { HelloModule } from "../modules/hello/hello.module"

@Module({
    imports: [
        HelloModule,
        GraphQLModule.forRootAsync({
            inject: [ConfigService],
            useClass: GqlConfigService,
        })
    ],
    providers: [
        ConfigService
    ]
})
export class MyGraphQLModule { }