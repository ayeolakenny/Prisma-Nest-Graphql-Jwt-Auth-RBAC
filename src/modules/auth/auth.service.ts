import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'modules/user/user.service';
import * as argon2 from 'argon2';
import { AuthResponse } from './dto/auth.response.dto';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findByUsernameOrPhoneNumber(username);
    if (!user) return null;
    const userPass = user.password;

    if (!userPass || user.confirmed === false)
      throw new UnauthorizedException();

    if (await argon2.verify(userPass, password)) return user;
    return null;
  }

  async login(user: User) {
    const auth: AuthResponse = user;
    const payload = AuthService.jwtPayload(user);
    auth.token = await this.tokenService.generateAccessToken(payload);
    const refreshToken = await this.tokenService.generateRefreshToken(payload);
    return { auth, refreshToken };
  }

  private static jwtPayload(user: User) {
    return { sub: user.id };
  }
}
