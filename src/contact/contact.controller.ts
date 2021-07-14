import { Body, Controller, Get, Post } from '@nestjs/common';

import { ContactService } from './contact.service';
import { IContact } from './interfaces/contact.interface';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getContacts(): Promise<IContact[]> | null {
    return await this.contactService.getContacts();
  }
  
  @Post()
  async addContact(@Body() contact: IContact): Promise<IContact> {
    return await this.contactService.addContact(contact);
  }
}
