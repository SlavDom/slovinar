import {NUMBER} from "./noun";

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

export function conjInApi(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjInEpi(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjInIpi(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjInUpi(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjInXpi(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.THIRD, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjImA(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjImE(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjImI(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjImU(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjImX(wordBase: string, person: PERSON, number: NUMBER) {
    switch ([person, number]) {
        case [PERSON.FIRST, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.SINGLE]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.DUAL]:
            return wordBase;
        case [PERSON.FIRST, NUMBER.PLURAL]:
            return wordBase;
        case [PERSON.SECOND, NUMBER.PLURAL]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function conjInpi(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInpd(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInfi(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInfd(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInpf(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInfp(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInpfp(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjIna(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInp(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjIni(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjInpp(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjInApi(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjInEpi(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjInXpi(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjInIpi(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjInUpi(wordBase, person, number);
    }
}

export function conjIm(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
) {
    switch (conjType) {
        case CONJUGATION.A_TYPE:
            return conjImA(wordBase, person, number);
        case CONJUGATION.E_TYPE:
            return conjImE(wordBase, person, number);
        case CONJUGATION.EXTRA_TYPE:
            return conjImX(wordBase, person, number);
        case CONJUGATION.I_TYPE:
            return conjImI(wordBase, person, number);
        case CONJUGATION.U_TYPE:
            return conjImU(wordBase, person, number);
    }
}

export function conjIn(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
    tense: TENSE,
) {
    switch (tense) {
        case TENSE.PRESENT_INDEFINITE:
            return conjInpi(wordBase, conjType, person, number);
        case TENSE.AORIST:
            return conjIna(wordBase, conjType, person, number);
        case TENSE.FUTURE_DEFINITE:
            return conjInfd(wordBase, conjType, person, number);
        case TENSE.FUTURE_IN_THE_PAST:
            return conjInfp(wordBase, conjType, person, number);
        case TENSE.FUTURE_INDEFINITE:
            return conjInfi(wordBase, conjType, person, number);
        case TENSE.IMPERFECT:
            return conjIni(wordBase, conjType, person, number);
        case TENSE.PAST_INDEFINITE:
            return conjInpi(wordBase, conjType, person, number);
        case TENSE.PERFECT:
            return conjInp(wordBase, conjType, person, number);
        case TENSE.PLUSQUAMPERFECT:
            return conjInpp(wordBase, conjType, person, number);
        case TENSE.PRE_FUTURE:
            return conjInpf(wordBase, conjType, person, number);
        case TENSE.PRE_FUTURE_IN_THE_PAST:
            return conjInpfp(wordBase, conjType, person, number);
        case TENSE.PRESENT_DEFINITE:
            return conjInpd(wordBase, conjType, person, number);
    }
}

export function conjDec(
    wordBase: string,
    conjType: CONJUGATION,
    person: PERSON,
    number: NUMBER,
    tense: TENSE,
) {
    switch (tense) {
        case TENSE.PRESENT_INDEFINITE:
            return conjInpi(wordBase, conjType, person, number);
        case TENSE.AORIST:
            return conjIna(wordBase, conjType, person, number);
        case TENSE.FUTURE_DEFINITE:
            return conjInfd(wordBase, conjType, person, number);
        case TENSE.FUTURE_IN_THE_PAST:
            return conjInfp(wordBase, conjType, person, number);
        case TENSE.FUTURE_INDEFINITE:
            return conjInfi(wordBase, conjType, person, number);
        case TENSE.IMPERFECT:
            return conjIni(wordBase, conjType, person, number);
        case TENSE.PAST_INDEFINITE:
            return conjInpi(wordBase, conjType, person, number);
        case TENSE.PERFECT:
            return conjInp(wordBase, conjType, person, number);
        case TENSE.PLUSQUAMPERFECT:
            return conjInpp(wordBase, conjType, person, number);
        case TENSE.PRE_FUTURE:
            return conjInpf(wordBase, conjType, person, number);
        case TENSE.PRE_FUTURE_IN_THE_PAST:
            return conjInpfp(wordBase, conjType, person, number);
        case TENSE.PRESENT_DEFINITE:
            return conjInpd(wordBase, conjType, person, number);
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
        case MOOD.IMPERATIVE:
            return conjIm(wordBase, conjType, person, number);
        case MOOD.CONDITIONAL:
        case MOOD.DECLARATIVE:
            return conjDec(wordBase, conjType, person, number, tense);
        case MOOD.NARRATIVE:
        case MOOD.INDICATIVE:
            return conjIn(wordBase, conjType, person, number, tense);
    }
}