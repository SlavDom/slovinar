import {Body, Controller, Get, Post} from '@nestjs/common';
import {WordDTO} from '../../../dto/dist/word';
import {WordService} from './word.service';

@Controller('words')
export class WordController {
    constructor(private readonly wordService: WordService) {}
    @Get()
    public async findAll(): Promise<WordDTO[]> {
        return this.wordService.findAll();
    }
    @Post()
    public async create(@Body() wordDto: WordDTO): Promise<WordDTO> {
        return this.wordService.add(wordDto);
    }
}
