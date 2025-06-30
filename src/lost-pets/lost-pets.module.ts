import { Module } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';
import { LostPetsController } from './lost-pets.controller';
import { LostPet } from './lost-pets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LostPet])],
  providers: [LostPetsService],
  controllers: [LostPetsController]
})
export class LostPetsModule { }
