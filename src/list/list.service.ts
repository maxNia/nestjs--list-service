import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Contact } from 'src/contact/contact.model';
import { IList, IListContactIds } from './interfaces/list.interface';
import { List } from './list.model';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(List) private readonly listModel: ReturnModelType<typeof List>,
    @InjectModel(Contact) private readonly contactModel: ReturnModelType<typeof Contact>
  ) {}

  async getLists(): Promise<IList[]> | null {
    return await this.listModel.find().exec();
  }

  async getContactsByListId(id: string): Promise<any> | null {
    const contacts = await this.listModel.findById(id);
    return contacts.contacts;
  }

  async addList(list: IList): Promise<IList> {
    const createdList = new this.listModel(list);
    return await createdList.save();
  }

  async addContactToList(data: IListContactIds): Promise<any> {
    const contact = await this.contactModel.findById(data.contactId)
    return await this.listModel.updateOne(
      {_id: data.listId},
      { $push: {contacts: contact}}
    );
  }
}
