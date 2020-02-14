export enum AFFIX_TYPE {
    SUFFIX= 'suffix',
    PREFIX= 'prefix',
}

export interface AffixDTO {
    value: string;
    affixType: AFFIX_TYPE;
}
