import {Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
// import {INews} from '../dto/src/news';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/posts')
  public posts(): {} {
    return {};
  }

  @Get()
  public index(): any {
    return { name: 'str' };
  }
}
