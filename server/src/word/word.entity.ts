import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {Nest} from '../nest/nest.entity';
import {Affix} from '../affix/affix.entity';
import {PART_OF_SPEECH} from '../../../dto/dist/word';

@Entity()
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    value: string;

    @Column()
    en: string;

    @Column({ default: '' })
    eo: string;

    @Column({ nullable: true })
    conj: number;

    @Column({ nullable: true })
    decl: number;

    @Column({ nullable: true })
    ending: string;

    @ManyToMany(() => Nest)
    nests: Nest[];

    @Column()
    part: PART_OF_SPEECH;

    // @BelongsToMany(() => Tag, () => WordTag)
    // tags: Tag[];

    @ManyToMany(() => Affix)
    affixes: Affix[];

    // @HasMany(() => Meaning)
    // words: Meaning[];
    //
    // @BelongsToMany(() => Word, () => Synonym)
    // synonyms: Word[];
    //
    // @BelongsToMany(() => Word, () => Antonym)
    // antonyms: Word[];
}
