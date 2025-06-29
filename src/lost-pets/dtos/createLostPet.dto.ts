import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLostPetDto {
    @ApiProperty({ example: 'Firulais', description: 'Nombre de la mascota perdida' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: 'Se perdió hace dos días', description: 'Descripción del caso' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ example: 'Labrador', description: 'Raza de la mascota' })
    @IsString()
    @IsNotEmpty()
    raza: string;

    @ApiProperty({ example: 'Parque Central', description: 'Última ubicación conocida' })
    @IsString()
    @IsNotEmpty()
    ultimaUbicacion: string;

    @ApiProperty({ example: '2025-06-29T10:00:00Z', description: 'Fecha en que se perdió (ISO 8601)' })
    @IsDateString()
    @IsNotEmpty()
    fechaPerdida: string;
}
