import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { PostsModule } from './posts/posts.module';
import { EventsModule } from './events/events.module';
import { LostPetsModule } from './lost-pets/lost-pets.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, PetsModule, PostsModule, EventsModule, LostPetsModule, AuthModule],
})
export class AppModule { }
