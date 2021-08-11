import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/healthCheck')
  getDefault() {}

  @Get('/healthCheck')
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
