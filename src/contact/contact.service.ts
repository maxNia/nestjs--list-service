import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

import { Contact } from './contact.model';
import { IContact } from './interfaces/contact.interface';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact) private readonly contactModel: ReturnModelType<typeof Contact>
  ) {}
  
  async getContacts(): Promise<Contact[]> | null {
    return await this.contactModel.find().exec();
  }

  async addContact(contactBody: IContact): Promise<Contact> {
    const createdContact = new this.contactModel(contactBody);
    return await createdContact.save();
  }
}
