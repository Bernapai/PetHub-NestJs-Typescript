import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/auth/dtos/login.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { }
