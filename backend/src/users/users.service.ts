import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    // TODO: Hash passwords with bcrypt or similar
    private readonly users = [
        {
            userId: 1,
            username: "webridge",
            password: "123qwe4"
        }
    ]

    findByUserName(username: string){
        return this.users.find(user => user.username == username)
    }
}
