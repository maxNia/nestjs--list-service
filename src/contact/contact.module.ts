import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactController } from './contact.controller';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Module({
  imports: [TypegooseModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
