import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { userSchema } from "../../schemas/user.schema";
import { TUser, TUserRequest } from "../../interfaces/user.interface";
import { Contact } from "../../entities/contact.entities";

const createContactService = async (contactData: TUserRequest): Promise<TUser> =>{

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact= contactRepository.create(contactData)
    await contactRepository.save(contact)

    const returnContact:TUser = userSchema.parse(contact)

    return returnContact
}

export default createContactService