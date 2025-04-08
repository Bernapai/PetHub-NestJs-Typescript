import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { UsersServices } from './users.service';
import { User } from './users.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersServices) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<User> {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }




}
