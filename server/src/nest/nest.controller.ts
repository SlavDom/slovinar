import {Controller, Get, Param} from '@nestjs/common';

@Controller('nests')
export class NestController {
    @Get()
    public findAll(): string {
        return 'This action returns all cats';
    }
    @Get(':id')
    public find(@Param('id') id) {
        return 'asd';
    }
}
