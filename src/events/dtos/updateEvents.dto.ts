import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './createEvents.dto';

export class UpdateEventoDto extends PartialType(CreateEventoDto) { }
