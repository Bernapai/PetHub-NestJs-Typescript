import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pet } from "src/pets/entities/pets.entity";
import { Poste } from "src/posts/entities/posts.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  contrasena: string;

  @OneToMany(() => Pet, pet => pet.dueno)
  pets: Pet[];

  @OneToMany(() => Poste, post => post.user)
  posts: Poste[];
}