import { Module } from '@nestjs/common';
import { UsersServices } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersServices],
  controllers: [UsersController],
  exports: [UsersServices],
})
export class UsersModule { }
