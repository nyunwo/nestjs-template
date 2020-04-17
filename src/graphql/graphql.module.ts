import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql'
import { GqlConfigService } from "./graphql-cfg.service";
import { ConfigService } from "../config/config.service";
import { HelloModule } from "../modules-gql/hello/hello.module"
import { UserModule } from "../modules-gql/user/user.module"

@Module({
    imports: [
        HelloModule,
        UserModule,
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