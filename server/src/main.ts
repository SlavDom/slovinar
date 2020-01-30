import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';

  const server = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  // const renderer = server.get(RenderModule);
  // renderer.register(server, client);
  await server.listen(3000);
}
bootstrap();
