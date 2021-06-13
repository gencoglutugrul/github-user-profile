import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: "webridge",
            password: '$2a$10$MUKVMhHpSzXTk1SuV5ds0u/mk.XPKVDHyXQBPLBQgC8J31zagXwoG' // 123qwe4
        }
    ]

    findByUserName(username: string){
        return this.users.find(user => user.username == username)
    }
}
