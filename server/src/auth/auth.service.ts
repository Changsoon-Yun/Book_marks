import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { PrismaService } from '../prisma.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async getUser(user: User) {
    const userData = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (userData) {
      const payload = {
        userName: user.userName,
      };

      const accessToken = this.jwtService.sign(payload);

      return {
        accessToken: accessToken,
        id: user.id,
        userName: user.userName,
      };
    }
  }

  async signup(authCredentialDto: AuthCredentialDto) {
    const { email, userName, password } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const userData = await this.prisma.user.create({
        data: {
          email,
          userName,
          password: hashedPassword,
        },
      });
      await this.prisma.folder.create({
        data: {
          name: '/',
          userId: userData.id,
        },
      });
      return {
        status: 'created',
        code: 201,
      };
    } catch (err) {
      if (err.code === 'P2002') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(authCredentialDto: AuthCredentialDto, res: Response) {
    const { userName, password } = authCredentialDto;
    const user = await this.prisma.user.findUnique({
      where: {
        userName,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      //유저 토큰 생성(secret + payload)

      const payload = { userName };
      const accessToken = this.jwtService.sign(payload);

      res.cookie('Authorization', accessToken, {
        httpOnly: true,
        maxAge: 48 * 60 * 60 * 1000,
      });

      return res.send({
        accessToken: accessToken,
        id: user.id,
        userName: user.userName,
      });
    } else {
      throw new UnauthorizedException('Login Failed');
    }
  }
}
