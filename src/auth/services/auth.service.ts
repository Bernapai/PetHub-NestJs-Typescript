import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDto } from '../dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersServices } from 'src/users/services/users.service';
import { RegisterDto } from '../dtos/register.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersServices,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: loginDto) {
        const { nombre, contrasena } = loginDto;
        const user = await this.usersService.findByName(nombre);
        const isPasswordValid = await bcrypt.compare(contrasena, user?.contrasena || '');

        if (!user || !isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const payload = { sub: user.id, nombre: user.nombre };
        return { access_token: this.jwtService.sign(payload) };
    }



    async register({ nombre, contrasena }: RegisterDto) {
        const existingUser = await this.usersService.findByName(nombre);

        if (existingUser) {
            throw new UnauthorizedException('El usuario ya existe');
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);
        return await this.usersService.create({
            nombre,
            contrasena: hashedPassword,
        });

    }


}
