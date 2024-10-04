import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalGuard } from './guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './guard/jwt-auth.guard';
import { GetUser } from './decorator';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth: AuthService) {}

    @UseGuards(LocalGuard)
    @Post('login')
    async login(@GetUser() user: User) {
        return this.auth.login(user);
    }

    @UseGuards(JwtGuard)
    @Post('teste')
    teste(@Request() req) {
        console.log(req.user.username);
    }
}
