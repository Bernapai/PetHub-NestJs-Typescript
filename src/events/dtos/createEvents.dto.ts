
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventoDto {
  @ApiProperty({ example: 'Expo Mascotas 2025', description: 'Nombre del evento' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'Evento para amantes de mascotas', description: 'Descripción del evento' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ example: 'Centro de Convenciones', description: 'Lugar donde se realizará el evento' })
  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @ApiProperty({ example: '2025-04-06T12:00:00Z', description: 'Fecha y hora del evento (ISO 8601)' })
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @ApiProperty({ example: 'Perros, Gatos', description: 'Tipo de mascota permitida en el evento' })
  @IsString()
  @IsNotEmpty()
  tipoMascotaPermitida: string;
}
