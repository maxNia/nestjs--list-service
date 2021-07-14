import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { Contact } from '../contact/contact.model';
import { ListController } from './list.controller';
import { List } from './list.model';
import { ListService } from './list.service';

@Module({
  imports: [
    TypegooseModule.forFeature([List]),
    TypegooseModule.forFeature([Contact])
  ],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}