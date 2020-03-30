import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {AffixService} from './affix.service';
import {AffixDTO} from 'slovinar-dto';

@Controller('affixes')
export class AffixController {
    constructor(private readonly affixService: AffixService) {}
    @Get()
    public async findAll(
        @Query()
        query: AffixDTO,
    ): Promise<AffixDTO[]> {
        if (query.value || query.affixType) {
            return this.affixService.findByNameAndType(query.value, query.affixType);
        }
        return this.affixService.findAll();
    }
    @Post()
    public async add(
        @Body()
        affixDto: AffixDTO,
    ): Promise<AffixDTO> {
        return this.affixService.add(affixDto);
    }
}
