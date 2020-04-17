import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AllExceptionFilter } from 'src/core/filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter())
  await app.listen(3002);
  console.log('Server Listen on 3002')
}
bootstrap();
