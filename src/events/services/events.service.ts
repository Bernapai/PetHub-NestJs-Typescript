import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from '../entities/events.entity';
import { CreateEventoDto } from '../dtos/createEvents.dto';
import { UpdateEventoDto } from '../dtos/updateEvents.dto';
@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Evento)
        private readonly eventsRepository: Repository<Evento>,
    ) { }

    async findAll(): Promise<Evento[]> {
        return this.eventsRepository.find();
    }

    async findOne(id: number): Promise<Evento> {
        const evento = await this.eventsRepository.findOneBy({ id });
        if (!evento) {
            throw new Error(`Evento with id ${id} not found`);
        }
        return evento;
    }

    async create(evento: CreateEventoDto): Promise<Evento> {
        const newEvento = this.eventsRepository.create(evento);
        return this.eventsRepository.save(newEvento);
    }

    async update(id: number, evento: UpdateEventoDto): Promise<Evento> {
        await this.eventsRepository.update(id, evento);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.eventsRepository.delete(id);
    }


}
