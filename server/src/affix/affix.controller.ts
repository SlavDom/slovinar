import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {AffixService} from './affix.service';
import {Affix} from './affix.entity';
import {AFFIX_TYPE, AffixDTO} from '../../../dto/dist/affix';

@Controller('affixes')
export class AffixController {
    constructor(private readonly affixService: AffixService) {}
    @Get()
    public async findAll(@Query() query: AffixDTO): Promise<AffixDTO[]> {
        if (query.value) {
            return this.affixService.findByName(query.value);
        } else {
            return this.affixService.findAll();
        }
    }
    @Post()
    public async add(@Body() affixDto: AffixDTO): Promise<AffixDTO> {
        const affix = new Affix();
        affix.value = affixDto.value;
        affix.affixType = AFFIX_TYPE.PREFIX;
        return this.affixService.add(affix);
    }
}
