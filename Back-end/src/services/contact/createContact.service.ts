import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { TContact, TContactRequest } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

const createContactService = async (userId: number, contactData: TContactRequest): Promise<TContact> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  
    const contact: Contact = contactRepository.create({ ...contactData, userId });
    
    await contactRepository.save(contact);
  
    const returnContact: TContact = contactSchema.parse(contact);
  
    return returnContact;
  };
  
  export default createContactService;