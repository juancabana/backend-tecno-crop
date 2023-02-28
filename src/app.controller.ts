import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo';
  }

  @Get('user')
  getUser(@Query() params: any): string {
    const { id, name } = params;
    return `User ${name ? name : 'fulanito'}, su id es ${id ? id : 'vacio'}`;
  }
}
