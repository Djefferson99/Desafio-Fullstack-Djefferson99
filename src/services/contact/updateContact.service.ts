import {  Repository } from "typeorm"
import { TUser, TUserRequestUpdate } from "../../interfaces/user.interface"
import { AppDataSource } from "../../data-source"
import { userSchema } from "../../schemas/user.schema"
import { Contact } from "../../entities/contact.entities"


const updateContactService = async (
    contactData: TUserRequestUpdate,
    contactId: number
): Promise<TUser> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)


    const oldContactData: Contact | null = await contactRepository.findOneBy({
        id: contactId,
    })

    
    const newContactData : Contact = contactRepository.create({
        ...oldContactData,
        ...contactData,
    })

    await contactRepository.save(newContactData)

    const returnContact: TUser = userSchema.parse(newContactData)

    return returnContact
}

export default updateContactService