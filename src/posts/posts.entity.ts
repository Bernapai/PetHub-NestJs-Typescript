import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/users/users.entity";

@Entity()
export class Poste {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    contenido: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fechaCreacion: Date;

    @ManyToOne(() => User, user => user.posts)
    user: User;
}