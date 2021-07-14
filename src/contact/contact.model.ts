import { prop } from '@typegoose/typegoose';

export class Contact {
  @prop({ required: true })
  name: string;
  
  @prop({ required: true })
  email: string;
}
