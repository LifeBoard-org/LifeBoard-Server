import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUsr.dto';

@Injectable()
export class UserService {
    createUser(registerUserDto: RegisterDto) {
        return { message: "User created"};
    }
}
