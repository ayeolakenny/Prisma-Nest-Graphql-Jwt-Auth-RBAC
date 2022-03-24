import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(input: Prisma.UserCreateInput): Promise<User> {
    const hashedPassword = await argon2.hash(input.password);
    return await this.prisma.user.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });
  }

  async findByUsernameOrPhoneNumber(usernameOrPhoneNuber: string) {
    return await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            username: usernameOrPhoneNuber,
          },
          {
            mobileNumber: usernameOrPhoneNuber,
          },
        ],
      },
    });
  }

  async findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }
}
