import { Repository } from "typeorm"
import { TUserResponse } from "../../interfaces/user.interface"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { responseArrayUserSchema } from "../../schemas/user.schema"



const listUsersService = async (): Promise<TUserResponse[]> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const users: TUserResponse[] = await usersRepository.find()

    const usersReturn: TUserResponse[] = responseArrayUserSchema.parse(users)

    return usersReturn
}

export default listUsersService