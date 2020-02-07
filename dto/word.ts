import {AFFIX_TYPE, AffixDTO} from './affix';
import {NestDTO} from './nest';

export enum DECLENSION {
    FIRST_FEMININE_HARD,
    FIRST_MASCULINE_HARD,
    FIRST_FEMININE_SOFT,
    FIRST_MASCULINE_SOFT,
    SECOND_MASCULINE_HARD,
    SECOND_NEUTRAL_HARD,
    SECOND_MASCULINE_SOFT,
    SECOND_NEUTRAL_SOFT,
    THIRD_FEMININE,
    THIRD_MASCULINE,
    THIRD_NEUTRAL_INANIMATE,
    THIRD_NEUTRAL_ANIMATE,
}

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

export enum CONJUGATION {
    A_TYPE,
    E_TYPE,
    I_TYPE,
    U_TYPE,
    EXTRA_TYPE,
}

export interface WordDTO {
    en: string;
    value: string;
    nests: NestDTO[];
    ending?: string;
    affixes: AffixDTO[];
    part: PART_OF_SPEECH;
    conj?: CONJUGATION;
    decl?: DECLENSION;
}
