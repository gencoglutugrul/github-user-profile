import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
    @MinLength(5)	
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;
}
