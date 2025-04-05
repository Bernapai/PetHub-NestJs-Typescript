import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/users/users.entity";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    raza: string;

    @Column()
    edad: number;

    @Column()
    tipo: string; // perro, gato, iguana ninja

    @ManyToOne(() => User, user => user.pets)
    dueno: User;
}