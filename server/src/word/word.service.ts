import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './word.entity';

@Injectable()
export class WordService {
    constructor(
        @InjectRepository(Word)
        private readonly wordRepository: Repository<Word>,
    ) {}

    async findAll(): Promise<Word[]> {
        return this.wordRepository.find();
    }

    async add(word: Word): Promise<Word> {
        return this.wordRepository.create(word);
    }
}
