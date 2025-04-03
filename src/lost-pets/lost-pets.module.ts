import { Module } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';
import { LostPetsController } from './lost-pets.controller';

@Module({
  providers: [LostPetsService],
  controllers: [LostPetsController]
})
export class LostPetsModule {}
