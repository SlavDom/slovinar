import {Controller, Get} from '@nestjs/common';
import {WordDTO} from '../../../dto/dist/word';
import {WordService} from './word.service';

@Controller('words')
export class WordController {
    constructor(private readonly wordService: WordService) {}
    @Get()
    async findAll(): Promise<WordDTO[]> {
        return this.wordService.findAll();
    }
}
