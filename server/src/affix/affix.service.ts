import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Affix} from './affix.entity';
import {AffixDTO} from '../../../dto/dist/affix';

@Injectable()
export class AffixService {
    constructor(
        @InjectRepository(Affix)
        private readonly affixRepository: Repository<Affix>,
    ) {}

    async findAll(): Promise<Affix[]> {
        return this.affixRepository.find();
    }

    async add(affix: AffixDTO): Promise<Affix> {
        const toSave = this.affixRepository.create(affix);
        return this.affixRepository.save(toSave);
    }

    async findByName(name: string): Promise<Affix[]> {
        return this.affixRepository.find({ where: { value: name } });
    }
}
