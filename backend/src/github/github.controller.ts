import { NotFoundException, Controller, Get, Param } from '@nestjs/common';
import { GithubUserInfoDto } from './dto/github-user-info.dto';
import { GithubUserRepoDto } from './dto/github-user-repo.dto';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService){}

    @Get(":userName")
    async getUser(@Param("userName") userName: string): Promise<GithubUserInfoDto>{
        try {
            return await this.githubService.getInfoByUserName(userName).toPromise();
        } catch (error) {
            if(error.response.status == 404)
                throw new NotFoundException('User not found!');
            return 
        }
    }

    @Get(":userName/repos")
    async getUserRepos(@Param("userName") userName: string): Promise<GithubUserRepoDto[]>{
        try {
            return await this.githubService.getReposByUserName(userName).toPromise();
        } catch (error) {
            if(error.response.status == 404)
                throw new NotFoundException('User not found!');
            return 
        }
    }
}
