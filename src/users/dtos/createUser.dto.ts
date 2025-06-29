import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'Juan Pérez',
        description: 'Nombre del usuario',
    })
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty({
        example: 'miClaveSegura123',
        description: 'Contraseña del usuario (mínimo 6 caracteres)',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    contrasena: string;
}
