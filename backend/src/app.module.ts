import { Module } from '@nestjs/common';

import { GithubModule } from './github/github.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GithubModule, AuthModule, UsersModule],
  providers: [],
})

export class AppModule {}