import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { PostsModule } from './posts/posts.module';
import { EventsModule } from './events/events.module';
import { LostPetsModule } from './lost-pets/lost-pets.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //  Hace que las variables de .env estén disponibles en todo el proyecto
    }),
    UsersModule,
    PetsModule,
    PostsModule,
    EventsModule,
    LostPetsModule,
    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule { }
