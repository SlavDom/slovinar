import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity} from './user/user.entity';
import {join} from 'path';
import {ServeStaticModule} from '@nestjs/serve-static';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'test',
    //   entities: [UserEntity],
    //   synchronize: true,
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'app', 'dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
