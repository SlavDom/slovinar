
export enum SCRIPTS {
    LATIN,
    CYRILLIC,
}

/* Returns the flavorized view of the word in standard Latin
 */
export function w2o(word: string, script: SCRIPTS): string {
    return word
        .split('')
        .map((letter: string) => {
            switch (script) {
                case SCRIPTS.LATIN:
                    return letter;
                case SCRIPTS.CYRILLIC:
                    return cyrMap.get(letter);
            }
        })
        .join();
}

const cyrMap = new Map();
cyrMap.set('a', 'а');
cyrMap.set('á', 'ā');
cyrMap.set('å', 'å');
cyrMap.set('b', 'б');
cyrMap.set('c', 'ц');
cyrMap.set('č', 'ч');
cyrMap.set('d', 'д');
cyrMap.set('đ', 'џ');
cyrMap.set('ŝ', 'ѕ');
cyrMap.set('e', 'е');
cyrMap.set('é', 'ẽ');
cyrMap.set('ë', 'є');
cyrMap.set('ě', 'ѣ');
cyrMap.set('ȩ', 'ѧ');
cyrMap.set('f', 'ф');
cyrMap.set('g', 'г');
cyrMap.set('ǧ', 'г');
cyrMap.set('h', 'х');
cyrMap.set('i', 'и');
cyrMap.set('ǐ', 'й');
cyrMap.set('ï', 'и');
cyrMap.set('į', 'į');
cyrMap.set('j', 'а');
cyrMap.set('k', 'к');
cyrMap.set('l', 'л');
cyrMap.set('m', 'м');
cyrMap.set('n', 'н');
cyrMap.set('o', 'о');
cyrMap.set('ô', 'ô');
cyrMap.set('ó', 'ô');
cyrMap.set('ö', 'ё');
cyrMap.set('p', 'п');
cyrMap.set('r', 'р');
cyrMap.set('s', 'с');
cyrMap.set('t', 'т');
cyrMap.set('u', 'у');
cyrMap.set('ŭ', 'у');
cyrMap.set('ú', 'у');
cyrMap.set('ü', 'ю');
cyrMap.set('ų', 'у');
cyrMap.set('v', 'в');
cyrMap.set('y', 'ы');
cyrMap.set('z', 'з');
cyrMap.set('z', 'ж');
