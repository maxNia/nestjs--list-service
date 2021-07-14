import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_PASSWORD, DB_URI, DB_USERNAME, } from './constants';
import { ContactModule } from '../contact/contact.module';
import { ListModule } from '../list/list.module';

@Module({
  imports: [
    TypegooseModule.forRoot(DB_URI, {
      user: DB_USERNAME,
      pass: DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    ContactModule,
    ListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
