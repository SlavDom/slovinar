import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {Nest} from '../nest/nest.entity';
import {Affix} from '../affix/affix.entity';

export enum PART_OF_SPEECH {
    NOUN,
    PRONOUN,
    ADJECTIVE,
    NUMERAL,
    ADVERB,
    VERB,
    PARTICIPLE,
    PREDICATIVE,
    GERUND,
    ARTICLE,
    PARTICLE,
    PREPOSITION,
    CONJUNCTION,
    INTERJECTION,
    ONOMATOPOETIC,
}

@Entity()
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    value: string;

    @Column()
    en: string;

    @Column()
    eo: string;

    @Column()
    conj: number;

    @Column()
    decl: number;

    @Column()
    ending: string;

    @ManyToMany(() => Nest)
    nests: Nest[];

    @Column()
    partId: PART_OF_SPEECH;

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
