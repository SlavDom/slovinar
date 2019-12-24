import {Controller, Get, Render} from '@nestjs/common';
import { AppService } from './app.service';
import {INews} from '../../dto/dist/news';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/about')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index')
  public index(): INews {
    return { name: 'str' };
  }
}
