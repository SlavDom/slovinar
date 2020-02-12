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

export function declN(wordBase: string, declType: NOUN_DECLENSION, gCase: number, gNumber: number, animate: boolean = false) {
    switch (declType) {
        case NOUN_DECLENSION.FIRST_FEMININE_HARD:
            return decl1n(wordBase, gCase, gNumber, animate);
        default:
            return wordBase;
    }
}

export function declA(wordBase: string, declType: ADJECTIVE_DECLENSION, gCase: number, gNumber: number) {
    switch (declType) {
        default:
            return wordBase;
    }
}