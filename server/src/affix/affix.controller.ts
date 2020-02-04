import {Body, Controller, Get, Post} from '@nestjs/common';
import {AffixService} from './affix.service';
import {Affix} from './affix.entity';
import {AffixDTO} from '../../../dto/dist/affix';

@Controller('affixes')
export class AffixController {
    constructor(private readonly affixService: AffixService) {}
    @Get()
    public async findAll(): Promise<Affix[]> {
        return this.affixService.findAll();
    }
    @Post()
    public async add(@Body() affixDto: AffixDTO): Promise<Affix> {
        const affix = new Affix();
        affix.value = affixDto.name;
        return this.affixService.add(affix);
    }
}
