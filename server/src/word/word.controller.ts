import {Controller, Get} from '@nestjs/common';

@Controller('words')
export class WordController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}
