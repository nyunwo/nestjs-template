import ApolloClient from 'apollo-boost'
import nodeFetch from 'node-fetch'
import { ConfigService } from 'src/config/config.service'

const fetch = (nodeFetch as any)

export class ApolloService {
    private client: ApolloClient<any>
    private static instance: ApolloService

    constructor() {
        let configService = new ConfigService()
        this.client = new ApolloClient({
            uri: configService.get('HASURA_URI'),
            headers: {
                'X-Hasura-Admin-Secret': configService.get('HASURA_ADMIN_SECRET')
            },
            fetch
        })
    }

    public static getInstance(){
        if(!ApolloService.instance){
            ApolloService.instance = new ApolloService()
        }
        return ApolloService.instance
    }

    public getClient(){
        return this.client
    }
}
