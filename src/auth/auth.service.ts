import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto';
import * as argon from "argon2";
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly user: UserService,
        private readonly jwt: JwtService
    ) {}

    async validateUser(credential: string, password: string) {
        const user = await this.user.getUserByCredential(credential);
        const correctPw = await argon.verify(user.hash, password);
        if (user && correctPw) {
            const {hash, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = {
            username: user.username,
            sub: user.id,
        };
        return {
            access_token: this.jwt.sign(payload),
        }
    }
}
