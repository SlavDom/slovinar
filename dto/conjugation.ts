import {NUMBER} from "./declension";

export enum PERSON {
    UNKNOWN,
    FIRST,
    SECOND,
    THIRD,
}

export enum CONJUGATION {
    A_TYPE,
    E_TYPE,
    I_TYPE,
    U_TYPE,
    EXTRA_TYPE,
}

export enum TENSE {
    PRESENT_INDEFINITE,
    PRESENT_DEFINITE,
    FUTURE_INDEFINITE,
    FUTURE_DEFINITE,
    PRE_FUTURE,
    FUTURE_IN_THE_PAST,
    PRE_FUTURE_IN_THE_PAST,
    AORIST,
    PERFECT,
    IMPERFECT,
    PLUSQUAMPERFECT,
    PAST_INDEFINITE,
}

export enum MOOD {
    INDICATIVE,
    IMPERATIVE,
    CONDITIONAL,
    NARRATIVE,
    DECLARATIVE,
}

export function conjIApi(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjIpi(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjIApi(wordBase, person, number);
        default:
            return wordBase;
    }
}

export function conjI(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
    tense: TENSE,
) {
    switch (tense) {
        case TENSE.PRESENT_INDEFINITE:
            return conjIpi(wordBase, conjType, person, number);
    }
}

export function conj(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
    tense: TENSE,
    mood: MOOD = MOOD.INDICATIVE,
) {
    switch (mood) {
        default:
            return conjI(wordBase, conjType, person, number, tense);
    }
}