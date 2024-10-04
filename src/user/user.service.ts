import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) { }

    async createUser(dto: CreateUserDto) {
        const passwordHash = await argon.hash(dto.password);

        try {
            const newUser = await this.prisma.user.create({
                data: {
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    username: dto.username,
                    email: dto.email,
                    hash: passwordHash,
                    telephone: String(dto.telephone),
                    address: {
                        create: {
                            addressLine1: dto.address.addressLine1,
                            addressLine2: dto.address.addressLine2,
                            city: dto.address.city,
                            country: dto.address.country,
                            postalCode: String(dto.address.postalCode)
                        }
                    }
                }
            })
            const { hash, ...user } = newUser;
            return user;
        } catch (error) {
            if (error.code == 'P2002') {
                throw new HttpException("Usuário já cadastrado!", HttpStatus.FORBIDDEN);
            }
            throw new HttpException("ERRO INTERNO", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async getUserByCredential(credential: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { username: credential },
                    { email: credential },
                ],
            },
        });
        if (!user) {
            throw new HttpException("Usuário não encontrado!", HttpStatus.NOT_FOUND);
        }
        return user;
    }
}
