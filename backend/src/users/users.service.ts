import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: "webridge",
            password: "$2y$12$8ViDV8civmGrXNHHq7pyReH3ThhiiKjaBuAPQG9JLU5qiZNi6czCm" // 123qwe4
        }
    ]

    findByUserName(username: string){
        return this.users.find(user => user.username == username)
    }
}
