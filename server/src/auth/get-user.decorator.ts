import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@prisma/client";

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const { user } = ctx.switchToHttp().getRequest();

    return user;
  }
);
