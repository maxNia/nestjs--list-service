import { getModelForClass, prop } from "@typegoose/typegoose";

class Contact {
  @prop()
  public name!: string;
  
  @prop()
  public email!: string;
}

export const contactModel = getModelForClass(Contact);
