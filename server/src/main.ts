import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { winstonLogger } from './utils/winston';

const Port = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });
  app.enableCors();
  app.use('/public', express.static('public'));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  await app.listen(Port);
  console.log(`Listening on Port ${Port}`);
}

bootstrap().catch((err) => {
  winstonLogger.error(err);
});
