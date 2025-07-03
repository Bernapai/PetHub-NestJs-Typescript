import { Controller, Post, Body } from '@nestjs/common';
import { loginDto } from '../dtos/login.dto';
import { RegisterDto } from '../dtos/register.dto';
import { AuthService } from '../services/auth.service';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiBody,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Login de usuario' })
    @ApiBody({ type: loginDto })
    @ApiResponse({ status: 201, description: 'Token de acceso generado' })
    async login(@Body() loginDto: loginDto) {
        return await this.authService.login(loginDto);
    }

    @Post('register')
    @ApiOperation({ summary: 'Registro de usuario' })
    @ApiBody({ type: RegisterDto })
    @ApiResponse({ status: 201, description: 'Usuario registrado correctamente' })
    async register(@Body() registerDto: RegisterDto) {
        return await this.authService.register(registerDto);
    }
}
