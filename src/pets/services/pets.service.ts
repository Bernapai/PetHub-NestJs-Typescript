import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../entities/pets.entity';
import { UpdatePetDto } from '../dtos/updatePet.dto';
import { CreatePetDto } from '../dtos/createPet.dto';
@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet)
        private readonly petRepository: Repository<Pet>,
    ) { }

    async findAll(): Promise<Pet[]> {
        return this.petRepository.find();
    }

    async findOne(id: number): Promise<Pet> {
        const pet = await this.petRepository.findOne({ where: { id } });
        if (!pet) {
            throw new Error(`Pet with id ${id} not found`);
        }
        return pet;
    }

    async create(pet: CreatePetDto): Promise<Pet> {
        return this.petRepository.save(pet);
    }

    async update(id: number, pet: UpdatePetDto): Promise<Pet> {
        await this.petRepository.update(id, pet);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.petRepository.delete(id);
    }
}
