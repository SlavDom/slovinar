import nextConnect from "next-connect";
import nextI18NextMiddleware from 'next-i18next/middleware';
import NextI18NextInstance from './i18n';

const handler = nextConnect();

handler
    .use(nextI18NextMiddleware(NextI18NextInstance));

export default handler;
