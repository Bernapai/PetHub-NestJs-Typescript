import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Post } from './posts.entity'
import { UpdatePostDto } from './dtos/updatePost.dto'
import { CreatePostDto } from './dtos/createPost.dto'


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) { }

    async findAll(): Promise<Post[]> {
        return this.postRepository.find()
    }

    async findOne(id: number): Promise<Post> {
        const post = await this.postRepository.findOne({ where: { id } })
        if (!post) {
            throw new Error(`Post with id ${id} not found`)
        }
        return post
    }

    async create(post: CreatePostDto): Promise<Post> {
        return this.postRepository.save(post)
    }

    async update(id: number, post: UpdatePostDto): Promise<Post> {
        await this.postRepository.update(id, post)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void> {
        await this.postRepository.delete(id)
    }


}
