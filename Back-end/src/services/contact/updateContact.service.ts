import {  Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entities"
import { TContact, TContactRequestUpdate } from "../../interfaces/contact.interfaces"
import { contactSchema } from "../../schemas/contact.schema"


const updateContactService = async (
    contactData: TContactRequestUpdate,
    contactId: number
): Promise<TContact> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)


    const oldContactData: Contact | null = await contactRepository.findOneBy({
        id: contactId,
    })

    
    const newContactData : Contact = contactRepository.create({
        ...oldContactData,
        ...contactData,
    })

    await contactRepository.save(newContactData)

    const returnContact: TContact = contactSchema.parse(newContactData)

    return returnContact
}

export default updateContactService