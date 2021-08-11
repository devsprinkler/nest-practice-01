import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): string {
    return Object.assign({ errorCode: 200, message: 'OK' });
  }
}
