import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthDto } from "../dto";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly auth: AuthService) {
        super({usernameField: 'usernameOrEmail'});
    }

    async validate(usernameOrEmail: string, password: string) {
        const user = await this.auth.validateUser(usernameOrEmail, password);
        if (!user) {
            throw new UnauthorizedException("Senha e/ou credencial incorreta(s)");
        }
        return user;
    }
}