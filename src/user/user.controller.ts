import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signup(@Body() dto: CreateUserDto) {
        console.log(dto);
        return await this.userService.createUser(dto);
    }

}
