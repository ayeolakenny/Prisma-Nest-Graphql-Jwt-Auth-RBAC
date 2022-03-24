import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(private jwt: JwtService, private configService: ConfigService) {}

  public async generateAccessToken(payload: any) {
    const algorithm: any = process.env.JWT_ALGORITHM;
    const secret = this.configService.get('token.access.secret');
    const expiresIn = this.configService.get('token.access.expiration');
    return await this.jwt.signAsync(payload, { algorithm, expiresIn, secret });
  }

  public async generateRefreshToken(payload: any) {
    const algorithm: any = process.env.JWT_ALGORITHM;
    const secret = this.configService.get('token.refresh.secret');
    const expiresIn = this.configService.get('token.refresh.expiration');
    return await this.jwt.signAsync(payload, { algorithm, expiresIn, secret });
  }
}
