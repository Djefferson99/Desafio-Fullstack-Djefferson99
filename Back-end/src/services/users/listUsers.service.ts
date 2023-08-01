import { Repository } from "typeorm"
import { TUser } from "../../interfaces/user.interface"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { responseArrayUserSchema } from "../../schemas/user.schema"



const listUsersService = async (): Promise<TUser[]> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const users: User[] = await usersRepository.find()

    const usersReturn: TUser[] = responseArrayUserSchema.parse(users)

    return usersReturn
}

export default listUsersService