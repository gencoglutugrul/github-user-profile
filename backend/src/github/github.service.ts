import { HttpService, Injectable } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IGithubUser } from './interfaces/github-user.interface';
import { IGithubRepo } from './interfaces/github-repo.interface';

@Injectable()
export class GithubService {
    private API_URL: string;
    
    constructor(private httpService: HttpService) {}

    onModuleInit() {
        this.API_URL = 'https://api.github.com/users/';
    }

    getInfoByUserName(userName: string): Observable<IGithubUser> {
        return this.httpService.get(this.API_URL + userName).pipe(
            map((res) => {
              return <IGithubUser> res.data
            }),
            catchError(err => {
                return throwError(err);
            })
        );
    }

    getReposByUserName(userName: string): Observable<IGithubRepo[]> {
        return this.httpService.get(this.API_URL + userName + '/repos').pipe(
            map((res) => {
                return res.data.map(repo => <IGithubRepo> repo);
            }),
            catchError(err => {
                return throwError(err);
            })
        );
    }
}
