import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    value: string;
}
