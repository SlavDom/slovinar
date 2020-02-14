import {CASES} from "./noun";

export enum NUMERAL_DECLENSION {
    UNKNOWN,
    ONE,
    TWO,
    THREE,
    FIVE,
}

export function decl1(wordBase: string, gCase: CASES) {
    switch (gCase) {
        case CASES.NOMINATIVE:
        case CASES.GENITIVE:
        case CASES.PARTITIVE:
        case CASES.ACCUSATIVE:
        case CASES.DATIVE:
        case CASES.INSTRUMENTAL:
        case CASES.PREPOSITIONAL:
        case CASES.LOCATIVE:
        case CASES.VOCATIVE:
            return wordBase;
    }
}

export function decl2(wordBase: string, gCase: CASES) {
    switch (gCase) {
        case CASES.NOMINATIVE:
        case CASES.GENITIVE:
        case CASES.PARTITIVE:
        case CASES.ACCUSATIVE:
        case CASES.DATIVE:
        case CASES.INSTRUMENTAL:
        case CASES.PREPOSITIONAL:
        case CASES.LOCATIVE:
        case CASES.VOCATIVE:
            return wordBase;
    }
}

export function decl3(wordBase: string, gCase: CASES) {
    switch (gCase) {
        case CASES.NOMINATIVE:
        case CASES.GENITIVE:
        case CASES.PARTITIVE:
        case CASES.ACCUSATIVE:
        case CASES.DATIVE:
        case CASES.INSTRUMENTAL:
        case CASES.PREPOSITIONAL:
        case CASES.LOCATIVE:
        case CASES.VOCATIVE:
            return wordBase;
    }
}

export function decl5(wordBase: string, gCase: CASES) {
    switch (gCase) {
        case CASES.NOMINATIVE:
        case CASES.GENITIVE:
        case CASES.PARTITIVE:
        case CASES.ACCUSATIVE:
        case CASES.DATIVE:
        case CASES.INSTRUMENTAL:
        case CASES.PREPOSITIONAL:
        case CASES.LOCATIVE:
        case CASES.VOCATIVE:
            return wordBase;
    }
}
