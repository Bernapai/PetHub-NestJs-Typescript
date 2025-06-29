import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    Post,
    UseGuards,
} from '@nestjs/common';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';
import { UpdatePetDto } from './dtos/updatePet.dto';
import { CreatePetDto } from './dtos/createPet.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
} from '@nestjs/swagger';

@ApiTags('Pets')
@ApiBearerAuth()
@Controller('pets')
@UseGuards(JwtAuthGuard)
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las mascotas' })
    @ApiResponse({ status: 200, description: 'Lista de mascotas', type: [Pet] })
    async findAll(): Promise<Pet[]> {
        return this.petsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una mascota por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID de la mascota' })
    @ApiResponse({ status: 200, description: 'Mascota encontrada', type: Pet })
    @ApiResponse({ status: 404, description: 'Mascota no encontrada' })
    async findOne(@Param('id') id: number): Promise<Pet> {
        return this.petsService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar una mascota por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID de la mascota' })
    @ApiBody({ type: UpdatePetDto })
    @ApiResponse({ status: 200, description: 'Mascota actualizada', type: Pet })
    @ApiResponse({ status: 404, description: 'Mascota no encontrada' })
    async update(@Param('id') id: number, @Body() pet: UpdatePetDto): Promise<Pet> {
        return this.petsService.update(id, pet);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una mascota por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID de la mascota' })
    @ApiResponse({ status: 204, description: 'Mascota eliminada' })
    async remove(@Param('id') id: number): Promise<void> {
        return this.petsService.delete(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear una nueva mascota' })
    @ApiBody({ type: CreatePetDto })
    @ApiResponse({ status: 201, description: 'Mascota creada', type: Pet })
    async create(@Body() pet: CreatePetDto): Promise<Pet> {
        return this.petsService.create(pet);
    }
}
