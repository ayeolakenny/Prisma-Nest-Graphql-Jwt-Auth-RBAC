import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'modules/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  providers: [
    AuthService,
    LocalStrategy,
    TokenService,
    AuthResolver,
    JwtStrategy,
  ],
})
export class AuthModule {}
