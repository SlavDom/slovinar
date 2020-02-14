import {AffixDTO} from './affix';
import {NestDTO} from './nest';
import {NOUN_DECLENSION} from "./noun";
import {CONJUGATION} from "./verb";

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

export interface WordDTO {
    en: string;
    value: string;
    nests: NestDTO[];
    ending?: string;
    affixes: AffixDTO[];
    part: PART_OF_SPEECH;
    conj?: CONJUGATION;
    decl?: NOUN_DECLENSION;
}
