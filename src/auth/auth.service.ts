import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUsr.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
    async registerUser(registerUserDto: RegisterDto) {
        console.log('registerDTO', registerUserDto);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(registerUserDto.password, saltRounds);
        // Logic for user register
        /* 
        * 1. check if email is already exist
        * 2. hash the password
        * 3. store the user into db
        * 4. generate jwt token
        * 5. send token in response
        */
       return this.userService.createUser({...registerUserDto, password: hashedPassword})
    }
}
