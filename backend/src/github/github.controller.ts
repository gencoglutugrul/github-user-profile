import { Controller, Get, Param } from '@nestjs/common';
import { GithubUserInfoDto } from './dto/github-user-info.dto';
import { GithubUserRepoDto } from './dto/github-user-repo.dto';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService){}

    @Get(":userName")
    async getUser(@Param("userName") userName: string): Promise<GithubUserInfoDto>{
        return await this.githubService.getInfoByUserName(userName).toPromise();
    }

    @Get(":userName/repos")
    async getUserRepos(@Param("userName") userName: string): Promise<GithubUserRepoDto[]>{
        return await this.githubService.getReposByUserName(userName).toPromise();
    }
}
