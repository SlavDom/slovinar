/* Returns the IPA transcription of the word
 */
export function w2t(word: string): string {
    return '[' + word
        .split('')
        .map((letter: string) => transcriptMap.get(letter))
        .join() + ']';
}

const transcriptMap = new Map();
transcriptMap.set('a', 'а');
transcriptMap.set('a', 'а');
transcriptMap.set('a', 'а');
transcriptMap.set('b', 'а');
transcriptMap.set('c', 'а');
transcriptMap.set('d', 'а');
transcriptMap.set('d', 'а');
transcriptMap.set('d', 'а');
transcriptMap.set('e', 'а');
transcriptMap.set('e', 'а');
transcriptMap.set('e', 'а');
transcriptMap.set('e', 'а');
transcriptMap.set('f', 'а');
transcriptMap.set('g', 'а');
transcriptMap.set('h', 'а');
transcriptMap.set('i', 'а');
transcriptMap.set('j', 'а');
transcriptMap.set('k', 'а');
transcriptMap.set('l', 'а');
transcriptMap.set('m', 'а');
transcriptMap.set('n', 'а');
transcriptMap.set('o', 'а');
transcriptMap.set('p', 'а');
transcriptMap.set('r', 'а');
transcriptMap.set('s', 'а');
transcriptMap.set('t', 'а');
transcriptMap.set('u', 'а');
transcriptMap.set('v', 'а');
transcriptMap.set('y', 'а');
transcriptMap.set('z', 'а');
transcriptMap.set('z', 'а');
transcriptMap.set('z', 'а');
transcriptMap.set('z', 'а');