import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Nest} from './nest.entity';
import {NestController} from './nest.controller';
import {NestService} from './nest.service';

@Module({
    imports: [TypeOrmModule.forFeature([Nest])],
    providers: [NestService],
    controllers: [NestController],
})
export class NestModule {}
