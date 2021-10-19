import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AppService {
  constructor(private databaseService: DatabaseService) {}

  async getHello(): Promise<string> {
    await this.databaseService.executeQuery('SELECT * FROM users', []);
    return 'Hello World!';
  }
}
