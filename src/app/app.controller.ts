import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '../config/config.service'

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly configService: ConfigService,
    ) { }

    @Get()
    getHello(): string {
        let uri:string = this.configService.get('HASURA_URI')
        console.log('HASURA_URI', uri)
        return this.appService.getHello();
    }
}