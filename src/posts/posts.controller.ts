import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    Post,
    UseGuards
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Poste } from './posts.entity';
import { UpdatePostDto } from './dtos/updatePost.dto';
import { CreatePostDto } from './dtos/createPost.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
} from '@nestjs/swagger';

@ApiTags('Posts')
@ApiBearerAuth()
@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los posts' })
    @ApiResponse({ status: 200, description: 'Lista de posts', type: [Poste] })
    async findAll(): Promise<Poste[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un post por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del post' })
    @ApiResponse({ status: 200, description: 'Post encontrado', type: Poste })
    @ApiResponse({ status: 404, description: 'Post no encontrado' })
    async findOne(@Param('id') id: number): Promise<Poste> {
        return this.postsService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un post por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del post' })
    @ApiBody({ type: UpdatePostDto })
    @ApiResponse({ status: 200, description: 'Post actualizado', type: Poste })
    @ApiResponse({ status: 404, description: 'Post no encontrado' })
    async update(
        @Param('id') id: number,
        @Body() post: UpdatePostDto,
    ): Promise<Poste> {
        return this.postsService.update(id, post);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un post por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del post' })
    @ApiResponse({ status: 204, description: 'Post eliminado' })
    async remove(@Param('id') id: number): Promise<void> {
        return this.postsService.delete(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo post' })
    @ApiBody({ type: CreatePostDto })
    @ApiResponse({ status: 201, description: 'Post creado', type: Poste })
    async create(@Body() post: CreatePostDto): Promise<Poste> {
        return this.postsService.create(post);
    }
}
