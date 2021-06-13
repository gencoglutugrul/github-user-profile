import { HttpService, Injectable } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

import { GithubUserInfoDto } from './dto/github-user-info.dto';
import { GithubUserRepoDto } from './dto/github-user-repo.dto';

@Injectable()
export class GithubService {
    private API_URL: string;
    
    constructor(private httpService: HttpService) {}

    onModuleInit() {
        this.API_URL = 'https://api.github.com/users/';
    }

    // maybe we should use interface instead of dto?
    getInfoByUserName(userName: string): Observable<GithubUserInfoDto> {
        return this.httpService.get(this.API_URL + userName).pipe(
            map((res) => {
              return plainToClass(GithubUserInfoDto, res.data)
            }),
            catchError(err => {
                return throwError(err);
            })
        );
    }

    getReposByUserName(userName: string): Observable<GithubUserRepoDto[]> {
        return this.httpService.get(this.API_URL + userName + '/repos').pipe(
            map((res) => {
                return res.data.map(x => plainToClass(GithubUserRepoDto, x));
            }),
            catchError(err => {
                return throwError(err);
            })
        );
    }
}
