import { Module } from '@nestjs/common';
import { LostPetsService } from './services/lost-pets.service';
import { LostPetsController } from './controllers/lost-pets.controller';
import { LostPet } from './entities/lost-pets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LostPet])],
  providers: [LostPetsService],
  controllers: [LostPetsController]
})
export class LostPetsModule { }
