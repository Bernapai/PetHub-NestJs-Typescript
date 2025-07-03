import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { PetsController } from './controllers/pets.controller';
import { Pet } from './entities/pets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService],
  controllers: [PetsController]
})
export class PetsModule { }
