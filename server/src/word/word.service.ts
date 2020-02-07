import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './word.entity';
import {WordDTO} from '../../../dto/dist/word';

@Injectable()
export class WordService {
    constructor(
        @InjectRepository(Word)
        private readonly wordRepository: Repository<Word>,
    ) {}

    async findAll(): Promise<Word[]> {
        return this.wordRepository.find();
    }

    async add(wordDTO: WordDTO): Promise<Word> {
        const word = this.wordRepository.create(wordDTO);
        return this.wordRepository.save(word);
    }
}
