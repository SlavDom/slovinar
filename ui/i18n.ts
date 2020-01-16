import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['en'],
});

export default NextI18NextInstance;

export const appWithTranslation = NextI18NextInstance.appWithTranslation;
export const withTranslation = NextI18NextInstance.withTranslation;
