import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersServices } from 'src/users/users.service';
@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersServices,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: CreateUserDto) {
        const { nombre, contrasena } = loginDto;
        const user = await this.usersService.findByName(nombre);
        if (!user || user.contrasena !== contrasena) {
            throw new UnauthorizedException('Credenciales inválidas');
        }
        const payload = { sub: user.id, name: user.nombre };
        return { access_token: this.jwtService.sign(payload) };
    }
}
