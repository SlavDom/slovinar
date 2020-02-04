import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Affix} from './affix.entity';

@Injectable()
export class AffixService {
    constructor(
        @InjectRepository(Affix)
        private readonly affixRepository: Repository<Affix>,
    ) {}

    async findAll(): Promise<Affix[]> {
        return this.affixRepository.find();
    }

    async add(affix: Affix): Promise<Affix> {
        return this.affixRepository.create(affix);
    }
}