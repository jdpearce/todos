import { Controller, Get } from '@nestjs/common';
import { Message } from '@todos/api-interfaces';
import { AppService } from './app.service';

// something to make this affected

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
