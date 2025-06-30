import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Evento } from './events.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule { }
