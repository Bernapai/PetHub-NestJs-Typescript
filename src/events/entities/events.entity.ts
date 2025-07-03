import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    ubicacion: string;

    @Column({ type: "timestamp" })
    fecha: Date;

    @Column()
    tipoMascotaPermitida: string; // perro, gato, etc
}