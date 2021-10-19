import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(PORT);
}
bootstrap();
