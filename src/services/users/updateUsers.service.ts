import {  Repository } from "typeorm"
import { TUser, TUserRequestUpdate } from "../../interfaces/user.interface"
import { User } from "../../entities/users.entities"
import { AppDataSource } from "../../data-source"
import { userSchema } from "../../schemas/user.schema"


const updateUserService = async (
    userData: TUserRequestUpdate,
    userId: number
): Promise<TUser> => {
    
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)


    const oldUsersData: User | null = await usersRepository.findOneBy({
        id: userId,
    })

    
    const newUserData : User = usersRepository.create({
        ...oldUsersData,
        ...userData,
    })

    await usersRepository.save(newUserData)

    const returnUser: TUser = userSchema.parse(newUserData)

    return returnUser
}

export default updateUserService