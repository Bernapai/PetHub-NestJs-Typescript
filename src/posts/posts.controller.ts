import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    Post
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { post } from './posts.entity';
import { UpdatePostDto } from './dtos/updatePost.dto';
import { CreatePostDto } from './dtos/createPost.dto';
@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService) { }
    @Get()
    async findAll(): Promise<post[]> {
        return this.postsService.findAll();
    }


    @Get(':id')
    async findOne(@Param('id') id: number): Promise<post> {
        return this.postsService.findOne(id);
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() post: UpdatePostDto): Promise<post> {
        return this.postsService.update(id, post);
    }


    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.postsService.delete(id);
    }


    @Post()
    async create(@Body() post: CreatePostDto): Promise<post> {
        return this.postsService.create(post);

    }
}
