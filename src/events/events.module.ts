import { Module } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { EventsController } from './controllers/events.controller';
import { Evento } from './entities/events.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule { }
