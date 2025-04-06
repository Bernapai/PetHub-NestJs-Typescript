import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    contenido: string;

    @IsInt()
    @IsNotEmpty()
    userId: number; // ID del usuario autor del post
}
