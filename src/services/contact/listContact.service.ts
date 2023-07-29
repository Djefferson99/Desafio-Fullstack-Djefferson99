import { Repository } from "typeorm"
import { TUser } from "../../interfaces/user.interface"
import { AppDataSource } from "../../data-source"
import { responseArrayUserSchema } from "../../schemas/user.schema"
import { Contact } from "../../entities/contact.entities"




const listContactService = async (): Promise<TUser[]> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contacts: Contact[] = await contactRepository.find()

    const contactsReturn: TUser[] = responseArrayUserSchema.parse(contacts)

    return contactsReturn
}

export default listContactService