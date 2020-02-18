import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Affix} from './affix.entity';
import {AFFIX_TYPE, AffixDTO} from '../../../dto/dist/affix';

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

    async findByNameAndType(name: string, type: AFFIX_TYPE): Promise<Affix[]> {
        const query: any = {};
        if (name) {
            query.value = name;
        }
        if (type) {
            query.affixType = type;
        }
        return this.affixRepository.find({ where: query });
    }
}
