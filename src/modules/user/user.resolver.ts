import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { UserCreateInput } from '@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: UserCreateInput) {
    return await this.userService.register(input);
  }

  @Auth([ROLE.USER])
  @Query(() => User)
  async findFromUser(@Args('input') usernameOrPhoneNumber: string) {
    return await this.userService.findByUsernameOrPhoneNumber(
      usernameOrPhoneNumber,
    );
  }

  @Auth([ROLE.ADMIN])
  @Query(() => User)
  async findFromAdmin(@Args('input') usernameOrPhoneNumber: string) {
    return await this.userService.findByUsernameOrPhoneNumber(
      usernameOrPhoneNumber,
    );
  }
}
