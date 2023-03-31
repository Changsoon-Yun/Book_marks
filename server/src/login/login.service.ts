import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dto/UserLoginDto';

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) {}
  login(body: UserLoginDto) {
    const { email, password } = body;

    if (email === 'test@test.com' && password === 'test') {
      const payload = { email, sub: '0' };
      const token = this.jwtService.sign(payload);

      return res.status(200).json({ success: true, token });
    }
    throw new UnauthorizedException('인증되지 않은 사용자 입니다.');
  }
}
