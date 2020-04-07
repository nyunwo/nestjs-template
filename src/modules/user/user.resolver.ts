import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import gql from 'graphql-tag'
import { User } from '../../generated/graphql.schema'
import { ApolloClient } from '../../core/decorators/apolloclient.decorator'

@Resolver('User')
export class UserResolver {
    @Query()
    async getUser(@ApolloClient() client:any): Promise<User> {
        const where = gql`
        query user {
            user {
                id
                username
            }
        }
        `
        const result = await client.query({
            query: where,
            variables: {},
            fetchPolicy: 'no-cache'
        })
        console.log('result:', result.data)
        return result.data.user[0]
    }
}