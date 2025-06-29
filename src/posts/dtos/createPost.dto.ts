import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({
        example: 'Mi primer post',
        description: 'Título del post',
    })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({
        example: 'Contenido detallado del post...',
        description: 'Contenido del post',
    })
    @IsString()
    @IsNotEmpty()
    contenido: string;

    @ApiProperty({
        example: 1,
        description: 'ID del usuario autor del post',
    })
    @IsInt()
    @IsNotEmpty()
    userId: number;
}
