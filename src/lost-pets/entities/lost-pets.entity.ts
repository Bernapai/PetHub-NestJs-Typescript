import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LostPet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    raza: string;

    @Column()
    ultimaUbicacion: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fechaPerdida: Date;
}