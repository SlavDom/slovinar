import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import { Word } from './word.entity';
import {WordDTO} from 'slovinar-dto';

@Injectable()
export class WordService {
    constructor(
        @InjectRepository(Word)
        private readonly wordRepository: Repository<Word>,
    ) {}

    async findAll(): Promise<Word[]> {
        return this.wordRepository.find();
    }

    async findByName(name: string): Promise<Word[]> {
        return this.wordRepository.find({ where: { value: Like(`%${name}%`) }});
    }

    async add(wordDTO: WordDTO): Promise<Word> {
        const word = this.wordRepository.create(wordDTO);
        return this.wordRepository.save(word);
    }
}
