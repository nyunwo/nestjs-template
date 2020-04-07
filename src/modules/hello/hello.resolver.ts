import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'

@Resolver('Hello')
export class HelloResolver {
    @Query()
    say(): any {
        return {
            name: 'Tim!!',
            age: 10
        }
    }
}