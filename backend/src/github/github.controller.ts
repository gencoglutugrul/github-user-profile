import { NotFoundException, Controller, Get, Param, UseGuards } from '@nestjs/common';

import { GithubService } from './github.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IGithubUser } from './interfaces/github-user.interface';
import { IGithubRepo } from './interfaces/github-repo.interface';


@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService){}

    @UseGuards(JwtAuthGuard)
    @Get(":userName")
    async getUser(@Param("userName") userName: string): Promise<IGithubUser>{
        try {
            return await this.githubService.getInfoByUserName(userName).toPromise();
        } catch (error) {
            if(error.response.status == 404)
                throw new NotFoundException('User not found!');
            return 
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get(":userName/repos")
    async getUserRepos(@Param("userName") userName: string): Promise<IGithubRepo[]>{
        try {
            return await this.githubService.getReposByUserName(userName).toPromise();
        } catch (error) {
            if(error.response.status == 404)
                throw new NotFoundException('User not found!');
            return 
        }
    }
}
