import { createParamDecorator } from '@nestjs/common'
import { ApolloService} from '../../shared/apollo/apollo.service'
import { AppService } from 'src/app/app.service';

export const ApolloClient = createParamDecorator((data, req) => {
    let apolloService = ApolloService.getInstance()
    
    return apolloService.getClient();
})