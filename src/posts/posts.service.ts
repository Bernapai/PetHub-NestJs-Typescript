import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { post } from './posts.entity'
import { UpdatePostDto } from './dtos/updatePost.dto'
import { CreatePostDto } from './dtos/createPost.dto'


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(post)
        private readonly postRepository: Repository<post>,
    ) { }

    async findAll(): Promise<post[]> {
        return this.postRepository.find()
    }

    async findOne(id: number): Promise<post> {
        const post = await this.postRepository.findOne({ where: { id } })
        if (!post) {
            throw new Error(`post with id ${id} not found`)
        }
        return post
    }

    async create(post: CreatePostDto): Promise<post> {
        return this.postRepository.save(post)
    }

    async update(id: number, post: UpdatePostDto): Promise<post> {
        await this.postRepository.update(id, post)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void> {
        await this.postRepository.delete(id)
    }


}
