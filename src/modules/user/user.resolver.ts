import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { Param } from '@nestjs/common'
import gql from 'graphql-tag'
import { User, UserInput } from '../../generated/graphql.schema'
import { ApolloClient } from '../../core/decorators/apolloclient.decorator'
import { fromPromise } from 'apollo-boost'

@Resolver()
export class UserResolver {
    @Query()
    async getUser(@Args('id') id: Number, @ApolloClient() client:any): Promise<User> {
        console.log('id:', id)
        const where = gql`
        query user {
            user(where: {id: {_eq: ${id}}}) {
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

    @Mutation()
    async addUser(@Args('userData') userData: UserInput, @ApolloClient() client:any): Promise<User>{
        console.log('userData', userData)
        const where = gql`
        mutation addUser {
            insert_user(objects:{
                username: "${userData.username}"
                password: "${userData.password}"
            }){
                returning {
                    id
                    username
                }
            }
        }
        `
        const result = await client.query({
            query: where,
            variables: {},
            fetchPolicy: 'no-cache'
        })
        console.log('result:', result.data.insert_user.returning[0])
        return result.data.insert_user.returning[0]
    }
}