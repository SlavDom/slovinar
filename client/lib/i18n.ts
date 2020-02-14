export async function setLanguageAsync(language: string) {
    const newDict = await import(`../public/${language}.json`);
    return newDict.default;
}
