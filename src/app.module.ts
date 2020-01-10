import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from 'nest-next';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity} from './user/user.entity';

@Module({
  imports: [
    RenderModule,
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'test',
    //   entities: [UserEntity],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
