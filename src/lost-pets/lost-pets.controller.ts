import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    Post
} from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';
import { LostPet } from './lost-pets.entity';
import { UpdateLostPetDto } from './dtos/updateLostPet.dto';
import { CreateLostPetDto } from './dtos/createLostPet.dto';


@Controller('lost-pets')
export class LostPetsController {
    constructor(private readonly lostPetsService: LostPetsService) { }

    @Get()
    async findAll(): Promise<LostPet[]> {
        return this.lostPetsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<LostPet> {
        return this.lostPetsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() lostPet: UpdateLostPetDto): Promise<LostPet> {
        return this.lostPetsService.update(id, lostPet);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.lostPetsService.delete(id);
    }

    @Post()
    async create(@Body() lostPet: CreateLostPetDto): Promise<LostPet> {
        return this.lostPetsService.create(lostPet);
    }
}
