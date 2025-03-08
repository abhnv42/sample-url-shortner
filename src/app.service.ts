import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  shortenUrl(): string {
    return 'shortened url';
  }
}
