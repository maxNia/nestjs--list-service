import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(
      'mongodb+srv://userList:pgOYaThPmbcJ7gtV@cluster0.qafom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
