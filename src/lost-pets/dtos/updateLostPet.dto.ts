import { PartialType } from '@nestjs/mapped-types';
import { CreateLostPetDto } from './createLostPet.dto';

export class UpdateLostPetDto extends PartialType(CreateLostPetDto) { }
