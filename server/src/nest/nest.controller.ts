import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {NestService} from './nest.service';
import {NestDTO} from '../../../dto/dist/nest';
import {Nest} from './nest.entity';

@Controller('nests')
export class NestController {
    constructor(private readonly nestService: NestService) {}
    @Get()
    public async findAll(): Promise<NestDTO[]> {
        return this.nestService.findAll();
    }
    @Post()
    public async create(@Body() nestDTO: NestDTO): Promise<NestDTO> {
        const nest = new Nest();
        nest.value = nestDTO.value;
        return this.nestService.add(nest);
    }
}
