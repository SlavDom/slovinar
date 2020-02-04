import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum AFFIX_TYPE {
    SUFFIX= 'suffix',
    PREFIX= 'prefix',
}

@Entity()
export class Affix {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    value: string;

    @Column({ length: 6 })
    affixType: AFFIX_TYPE;
}
