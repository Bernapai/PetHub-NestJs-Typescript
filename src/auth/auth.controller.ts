import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(loginDto: CreateUserDto) {
        return await this.authService.login(loginDto);
    }
}
