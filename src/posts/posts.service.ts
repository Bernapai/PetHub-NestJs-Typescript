import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Poste } from './posts.entity'
import { UpdatePostDto } from './dtos/updatePost.dto'
import { CreatePostDto } from './dtos/createPost.dto'


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Poste)
        private readonly postRepository: Repository<Poste>,
    ) { }

    async findAll(): Promise<Poste[]> {
        return this.postRepository.find()
    }

    async findOne(id: number): Promise<Poste> {
        const Poste = await this.postRepository.findOne({ where: { id } })
        if (!Poste) {
            throw new Error(`Post with id ${id} not found`)
        }
        return Poste
    }

    async create(Poste: CreatePostDto): Promise<Poste> {
        return this.postRepository.save(Poste)
    }

    async update(id: number, Poste: UpdatePostDto): Promise<Poste> {
        await this.postRepository.update(id, Poste)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void> {
        await this.postRepository.delete(id)
    }


}
