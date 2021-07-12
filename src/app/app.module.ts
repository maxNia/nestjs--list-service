import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { DB_PASSWORD, DB_URI, DB_USERNAME, } from './constants';

@Module({
  imports: [
    TypegooseModule.forRoot(DB_URI, {
      user: DB_USERNAME,
      pass: DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
