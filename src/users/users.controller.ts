import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards
} from '@nestjs/common';
import { UsersServices } from './users.service';
import { User } from './users.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('users')

export class UsersController {
  constructor(private readonly usersService: UsersServices) { }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }




}
