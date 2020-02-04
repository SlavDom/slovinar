import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AffixService} from './affix.service';
import {Affix} from './affix.entity';
import {AffixController} from './affix.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Affix])],
    providers: [AffixService],
    controllers: [AffixController],
})
export class AffixModule {}
