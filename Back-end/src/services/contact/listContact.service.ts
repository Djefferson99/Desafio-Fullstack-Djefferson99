import { FindManyOptions, Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entities"
import { User } from "../../entities/users.entities"

const listContactService = async (userId: number): Promise<{ user: User, contacts: Contact[] }> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    
    const user: User | null = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found.");
    }
  
    const options: FindManyOptions<Contact> = {
      where: {
        userId: userId,
      },
    };
  
    const contacts: Contact[] = await contactRepository.find(options);
  
    return { user, contacts };
  };

export default listContactService