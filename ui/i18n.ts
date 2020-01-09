import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['en'],
    localeSubpaths: {},
});

export default NextI18NextInstance;