import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LostPet } from '../entities/lost-pets.entity';
import { CreateLostPetDto } from '../dtos/createLostPet.dto';
import { UpdateLostPetDto } from '../dtos/updateLostPet.dto';
@Injectable()
export class LostPetsService {
    constructor(
        @InjectRepository(LostPet)
        private readonly lostPetsRepository: Repository<LostPet>,
    ) { }

    async findAll(): Promise<LostPet[]> {
        return this.lostPetsRepository.find();
    }

    async findOne(id: number): Promise<LostPet> {
        const lostPet = await this.lostPetsRepository.findOneBy({ id });
        if (!lostPet) {
            throw new Error(`LostPet with id ${id} not found`);
        }
        return lostPet;
    }

    async create(lostPet: CreateLostPetDto): Promise<LostPet> {
        const newLostPet = this.lostPetsRepository.create(lostPet);
        return this.lostPetsRepository.save(newLostPet);
    }

    async update(id: number, lostPet: UpdateLostPetDto): Promise<LostPet> {
        await this.lostPetsRepository.update(id, lostPet);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.lostPetsRepository.delete(id);
    }
}
