import { Module } from '@nestjs/common';
import { UsersServices } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersServices],
  controllers: [UsersController],
  exports: [UsersServices],
})
export class UsersModule { }
