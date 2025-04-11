import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    Post
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Evento } from './events.entity';
import { UpdateEventoDto } from './dtos/updateEvents.dto';
import { CreateEventoDto } from './dtos/createEvents.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Get()
    async findAll(): Promise<Evento[]> {
        return this.eventsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Evento> {
        return this.eventsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() evento: UpdateEventoDto): Promise<Evento> {
        return this.eventsService.update(id, evento);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.eventsService.delete(id);
    }

    @Post()
    async create(@Body() evento: CreateEventoDto): Promise<Evento> {
        return this.eventsService.create(evento);
    }
}
