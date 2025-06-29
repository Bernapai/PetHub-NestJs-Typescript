import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  UseGuards
} from '@nestjs/common';
import { UsersServices } from './users.service';
import { User } from './users.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CreateUserDto } from './dtos/createUser.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth() // Indica que usa JWT Bearer Auth
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServices) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios', type: [User] })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del usuario' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado', type: User })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un usuario por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del usuario' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Usuario actualizado', type: User })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  async update(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del usuario' })
  @ApiResponse({ status: 204, description: 'Usuario eliminado' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Usuario creado', type: User })
  async create(@Body() userCreateDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userCreateDto);
  }
}

