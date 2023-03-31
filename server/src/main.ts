import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { winstonLogger } from './utils/winston';

const Port = 4000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(Port);
  console.log(`Listening on Port ${Port}`);
}
bootstrap().catch((err) => {
  winstonLogger.error(err);
});
