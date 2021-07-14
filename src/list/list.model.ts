import { prop } from '@typegoose/typegoose';
import { Contact } from '../contact/contact.model';

export class List {
  @prop({ required: true })
  name: string;

  @prop({ default: [] })
  contacts: Contact[]
}
