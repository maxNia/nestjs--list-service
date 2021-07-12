import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { DB_PASSWORD, DB_URI, DB_USERNAME, } from './constants';
import { ContactModule } from 'src/contact/contact.module';
import { ListModule } from 'src/list/list.module';

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
