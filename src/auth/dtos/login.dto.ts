import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
    @ApiProperty({ example: 'usuario123', description: 'Nombre de usuario' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: 'contraseñaSegura123', description: 'Contraseña del usuario' })
    @IsString()
    @IsNotEmpty()
    contrasena: string;
}
