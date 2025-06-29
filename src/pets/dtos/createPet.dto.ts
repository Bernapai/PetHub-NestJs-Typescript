import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
    @ApiProperty({ example: 'Firulais', description: 'Nombre de la mascota' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: 'Labrador', description: 'Raza de la mascota' })
    @IsString()
    @IsNotEmpty()
    raza: string;

    @ApiProperty({ example: 5, description: 'Edad de la mascota en años' })
    @IsInt()
    @Min(0)
    edad: number;

    @ApiProperty({ example: 'Perro', description: 'Tipo de mascota (perro, gato, etc.)' })
    @IsString()
    @IsNotEmpty()
    tipo: string;

    @ApiProperty({ example: 1, description: 'ID del dueño (usuario)' })
    @IsInt()
    @IsNotEmpty()
    duenoId: number;
}
