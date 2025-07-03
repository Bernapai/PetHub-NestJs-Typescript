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
import { EventsService } from '../services/events.service';
import { Evento } from '../entities/events.entity';
import { UpdateEventoDto } from '../dtos/updateEvents.dto';
import { CreateEventoDto } from '../dtos/createEvents.dto';
import { AuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
} from '@nestjs/swagger';

@ApiTags('Events')
@ApiBearerAuth()
@Controller('events')
@UseGuards(AuthGuard)
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los eventos' })
    @ApiResponse({ status: 200, description: 'Lista de eventos', type: [Evento] })
    async findAll(): Promise<Evento[]> {
        return this.eventsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un evento por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del evento' })
    @ApiResponse({ status: 200, description: 'Evento encontrado', type: Evento })
    @ApiResponse({ status: 404, description: 'Evento no encontrado' })
    async findOne(@Param('id') id: number): Promise<Evento> {
        return this.eventsService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un evento por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del evento' })
    @ApiBody({ type: UpdateEventoDto })
    @ApiResponse({ status: 200, description: 'Evento actualizado', type: Evento })
    @ApiResponse({ status: 404, description: 'Evento no encontrado' })
    async update(
        @Param('id') id: number,
        @Body() evento: UpdateEventoDto,
    ): Promise<Evento> {
        return this.eventsService.update(id, evento);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un evento por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del evento' })
    @ApiResponse({ status: 204, description: 'Evento eliminado' })
    async remove(@Param('id') id: number): Promise<void> {
        return this.eventsService.delete(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo evento' })
    @ApiBody({ type: CreateEventoDto })
    @ApiResponse({ status: 201, description: 'Evento creado', type: Evento })
    async create(@Body() evento: CreateEventoDto): Promise<Evento> {
        return this.eventsService.create(evento);
    }
}
