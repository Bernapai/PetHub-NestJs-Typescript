import { IsString, IsNotEmpty } from 'class-validator';

export class loginDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    contrasena: string;
}
