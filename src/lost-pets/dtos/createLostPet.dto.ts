import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateLostPetDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    raza: string;

    @IsString()
    @IsNotEmpty()
    ultimaUbicacion: string;

    @IsDateString()
    @IsNotEmpty()
    fechaPerdida: string; // formato ISO
}
