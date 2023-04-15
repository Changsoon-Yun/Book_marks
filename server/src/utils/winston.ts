/* istanbul ignore file */

import { utilities, WinstonModule } from "nest-winston";
import * as winston from "winston";

const logLevel = process.env.LOG_LEVEL || 'info';
const env = process.env.NODE_ENV;
const appName = process.env.APP_NAME || 'Creative Wallet';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: logLevel,
      // production 환경이라면 http, 개발환경이라면 모든 단계를 로그
      format:
        env !== 'production'
          ? winston.format.combine(
              winston.format.colorize(),
              winston.format.timestamp(),
              utilities.format.nestLike(appName, {
                prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
              })
            )
          : winston.format.json(),
    }),
  ],
});

export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: logLevel,
      // production 환경이라면 http, 개발환경이라면 모든 단계를 로그
      format:
        env !== 'production'
          ? winston.format.combine(
              winston.format.colorize(),
              winston.format.timestamp(),
              utilities.format.nestLike(appName, {
                prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
              })
            )
          : winston.format.json(),
    }),
  ],
});
