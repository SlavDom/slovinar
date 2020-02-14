import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {AFFIX_TYPE} from '../../../dto/dist/affix';

@Entity()
export class Affix {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    value: string;

    @Column({ length: 6 })
    affixType: AFFIX_TYPE;
}
