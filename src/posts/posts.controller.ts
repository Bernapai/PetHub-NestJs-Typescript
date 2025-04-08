import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';
import { UpdatePostDto } from './dtos/updatePost.dto';
import { CreatePostDto } from './dtos/createPost.dto';
@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService) { }
    @Get()
    async findAll(): Promise<Post[]> {
        return this.postsService.findAll();
    }


    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Post> {
        return this.postsService.findOne(id);
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() post: UpdatePostDto): Promise<Post> {
        return this.postsService.update(id, post);
    }


    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.postsService.delete(id);
    }


    @Put()
    async create(@Body() post: CreatePostDto): Promise<Post> {
        return this.postsService.create(post);

    }
}
