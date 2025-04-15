import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    Post,
    UseGuards
} from '@nestjs/common';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';
import { UpdatePetDto } from './dtos/updatePet.dto';
import { CreatePetDto } from './dtos/createPet.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('pets')
@UseGuards(JwtAuthGuard) // Apply the JWT guard to all routes in this controller
export class PetsController {

    constructor(private readonly petsService: PetsService) { }

    @Get()
    async findAll(): Promise<Pet[]> {
        return this.petsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Pet> {
        return this.petsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() pet: UpdatePetDto): Promise<Pet> {
        return this.petsService.update(id, pet);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.petsService.delete(id);
    }

    @Post()
    async create(@Body() pet: CreatePetDto): Promise<Pet> {
        return this.petsService.create(pet);
    }


}
