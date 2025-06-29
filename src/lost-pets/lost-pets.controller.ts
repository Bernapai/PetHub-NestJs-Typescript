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
import { LostPetsService } from './lost-pets.service';
import { LostPet } from './lost-pets.entity';
import { UpdateLostPetDto } from './dtos/updateLostPet.dto';
import { CreateLostPetDto } from './dtos/createLostPet.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
} from '@nestjs/swagger';

@ApiTags('LostPets')
@ApiBearerAuth()
@Controller('lost-pets')
@UseGuards(AuthGuard)
export class LostPetsController {
    constructor(private readonly lostPetsService: LostPetsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las mascotas perdidas' })
    @ApiResponse({ status: 200, description: 'Lista de mascotas perdidas', type: [LostPet] })
    async findAll(): Promise<LostPet[]> {
        return this.lostPetsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una mascota perdida por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID de la mascota perdida' })
    @ApiResponse({ status: 200, description: 'Mascota perdida encontrada', type: LostPet })
    @ApiResponse({ status: 404, description: 'Mascota perdida no encontrada' })
    async findOne(@Param('id') id: number): Promise<LostPet> {
        return this.lostPetsService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar una mascota perdida por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID de la mascota perdida' })
    @ApiBody({ type: UpdateLostPetDto })
    @ApiResponse({ status: 200, description: 'Mascota perdida actualizada', type: LostPet })
    @ApiResponse({ status: 404, description: 'Mascota perdida no encontrada' })
    async update(
        @Param('id') id: number,
        @Body() lostPet: UpdateLostPetDto,
    ): Promise<LostPet> {
        return this.lostPetsService.update(id, lostPet);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una mascota perdida por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID de la mascota perdida' })
    @ApiResponse({ status: 204, description: 'Mascota perdida eliminada' })
    async remove(@Param('id') id: number): Promise<void> {
        return this.lostPetsService.delete(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear una nueva mascota perdida' })
    @ApiBody({ type: CreateLostPetDto })
    @ApiResponse({ status: 201, description: 'Mascota perdida creada', type: LostPet })
    async create(@Body() lostPet: CreateLostPetDto): Promise<LostPet> {
        return this.lostPetsService.create(lostPet);
    }
}
