import { Contact } from 'src/contact/contact.model'

export interface IList {
  name: string;
  contacts: Contact[];
}

export interface IListContactIds{
  listId: string;
  contactId: string;
}
