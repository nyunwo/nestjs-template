import { Injectable } from '@nestjs/common'

@Injectable()
export class HomeService {
    sayHi(){
        return 'Hello Nest'
    }
}

