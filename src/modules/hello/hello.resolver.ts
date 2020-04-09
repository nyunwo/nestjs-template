import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'

@Resolver()
export class HelloResolver {
    @Query()
    say(): any {
        return {
            name: 'Tim!!',
            age: 10
        }
    }
}