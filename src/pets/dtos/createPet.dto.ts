import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    raza: string;

    @IsInt()
    @Min(0)
    edad: number;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsInt()
    @IsNotEmpty()
    duenoId: number; // ID del usuario dueño
}