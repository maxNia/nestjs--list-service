import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IContact } from '../contact/interfaces/contact.interface';
import { IList, IListContactIds } from './interfaces/list.interface';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  async getLists(): Promise<IList[]> | null {
    return await this.listService.getLists();
  }

  @Get(':listId')
  async getContactsByListId(@Param('listId') param: string): Promise<IContact[]> | null {
    return await this.listService.getContactsByListId(param);
  }
  
  @Post()
  async addList(@Body() list: IList): Promise<IList> {
    return await this.listService.addList(list);
  }

  @Post('/addContact')
  async addContactToList(@Body() data: IListContactIds): Promise<IList> {
    return await this.listService.addContactToList(data);
  }
}
