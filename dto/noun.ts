export enum NUMBER {
    UNKNOWN,
    SINGLE,
    DUAL,
    PLURAL,
}

export enum ADJECTIVE_DECLENSION {
    MASCULINE,
    FEMININE,
    NEUTRAL,
}

export enum NOUN_DECLENSION {
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

export enum CASES {
    NOMINATIVE,
    GENITIVE,
    PARTITIVE,
    ACCUSATIVE,
    DATIVE,
    INSTRUMENTAL,
    PREPOSITIONAL,
    LOCATIVE,
    VOCATIVE,
}

export function decl1n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl2n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl3n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl4n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl5n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl6n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl7n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl8n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl9n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}


export function decl10n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl11n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl12n(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl1a(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl2a(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function decl3a(wordBase: string, gCase: number, gNumber: number, animate: boolean = false) {
    switch ([gCase, gNumber]) {
        case [NUMBER.SINGLE, CASES.GENITIVE]:
            return wordBase + 'a';
        case [NUMBER.SINGLE, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.SINGLE, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.DUAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.DUAL, CASES.VOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.NOMINATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.GENITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PARTITIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.ACCUSATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.DATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.INSTRUMENTAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.PREPOSITIONAL]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.LOCATIVE]:
            return wordBase;
        case [NUMBER.PLURAL, CASES.VOCATIVE]:
            return wordBase;
        default:
            return wordBase;
    }
}

export function declN(wordBase: string, declType: NOUN_DECLENSION, gCase: number, gNumber: number, animate: boolean = false) {
    switch (declType) {
        case NOUN_DECLENSION.FIRST_FEMININE_HARD:
            return decl1n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.FIRST_FEMININE_SOFT:
            return decl2n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.FIRST_MASCULINE_HARD:
            return decl3n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.FIRST_MASCULINE_SOFT:
            return decl4n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.SECOND_MASCULINE_HARD:
            return decl5n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.SECOND_MASCULINE_SOFT:
            return decl6n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.SECOND_NEUTRAL_HARD:
            return decl7n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.SECOND_NEUTRAL_SOFT:
            return decl8n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.THIRD_FEMININE:
            return decl9n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.THIRD_MASCULINE:
            return decl10n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.THIRD_NEUTRAL_ANIMATE:
            return decl11n(wordBase, gCase, gNumber, animate);
        case NOUN_DECLENSION.THIRD_NEUTRAL_INANIMATE:
            return decl12n(wordBase, gCase, gNumber, animate);
    }
}

export function declA(wordBase: string, declType: ADJECTIVE_DECLENSION, gCase: number, gNumber: number) {
    switch (declType) {
        case ADJECTIVE_DECLENSION.FEMININE:
            return decl1a(wordBase, gCase, gNumber);
        case ADJECTIVE_DECLENSION.MASCULINE:
            return decl2a(wordBase, gCase, gNumber);
        case ADJECTIVE_DECLENSION.NEUTRAL:
            return decl3a(wordBase, gCase, gNumber);
    }
}