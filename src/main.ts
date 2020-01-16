import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import {resolve} from 'path';
import Next from 'next';
import 'reflect-metadata';
import { RenderModule } from 'nest-next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from '../ui/i18n';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const dir = resolve(__dirname, '../ui');
  const app = Next({ dev, dir });

  await app.prepare();

  const server = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  server.use(nextI18NextMiddleware(nextI18next));

  const renderer = server.get(RenderModule);
  renderer.register(server, app, { viewsDir: '' });
  await server.listen(3000);
}
bootstrap();
