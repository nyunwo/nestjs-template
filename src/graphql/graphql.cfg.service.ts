import { Injectable } from '@nestjs/common'
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql'
import {
    makeRemoteExecutableSchema, mergeSchemas,
    introspectSchema, IResolversParameter
} from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
const fetch = require('node-fetch')
import { ConfigService } from 'src/config/config.service'

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
    constructor(
        private readonly configService: ConfigService
    ) { }

    async createGqlOptions(): Promise<GqlModuleOptions> {
        // 远程schema
        const remoteExecutableSchema = await this.getRemoteSchema()

        return {
            transformSchema: async (schema: GraphQLSchema) => {
                return mergeSchemas({
                    schemas: [
                        schema,
                        remoteExecutableSchema
                    ]
                });
            },
            debug: true,
            typePaths: ['./src/**/*.graphql'],
            
        }
    }

    // 通过Uri获取Hasura的远程Schema
    private async getRemoteSchema(): Promise<GraphQLSchema> {
        const http = new HttpLink({
            uri: this.configService.get('HASURA_URI'),
            fetch
        })

        const link = setContext((request, previousContext) => ({
            headers: {
                'X-Hasura-Admin-Secret': this.configService.get('HASURA_ADMIN_SECRET')
                //'Authentication': `Bearer ${previousContext.graphqlContext.authKey}`,
            }
        })).concat(http);

        const schema = await introspectSchema(link);

        const executableSchema = makeRemoteExecutableSchema({
            schema,
            link,
        });

        return executableSchema

    }
}