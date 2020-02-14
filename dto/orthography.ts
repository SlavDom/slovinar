
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
cyrMap.set('a', 'а');
cyrMap.set('a', 'а');
cyrMap.set('b', 'а');
cyrMap.set('c', 'а');
cyrMap.set('d', 'а');
cyrMap.set('d', 'а');
cyrMap.set('d', 'а');
cyrMap.set('e', 'а');
cyrMap.set('e', 'а');
cyrMap.set('e', 'а');
cyrMap.set('e', 'а');
cyrMap.set('f', 'а');
cyrMap.set('g', 'а');
cyrMap.set('h', 'а');
cyrMap.set('i', 'а');
cyrMap.set('j', 'а');
cyrMap.set('k', 'а');
cyrMap.set('l', 'а');
cyrMap.set('m', 'а');
cyrMap.set('n', 'а');
cyrMap.set('o', 'а');
cyrMap.set('p', 'а');
cyrMap.set('r', 'а');
cyrMap.set('s', 'а');
cyrMap.set('t', 'а');
cyrMap.set('u', 'а');
cyrMap.set('v', 'а');
cyrMap.set('y', 'а');
cyrMap.set('z', 'а');
cyrMap.set('z', 'а');
cyrMap.set('z', 'а');
cyrMap.set('z', 'а');