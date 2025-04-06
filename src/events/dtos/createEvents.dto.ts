import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsDateString()
  @IsNotEmpty()
  fecha: string; // formato ISO: "2025-04-06T12:00:00Z"

  @IsString()
  @IsNotEmpty()
  tipoMascotaPermitida: string;
}
