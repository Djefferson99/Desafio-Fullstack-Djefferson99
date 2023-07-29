import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { userSchema } from "../../schemas/user.schema";
import { User } from "../../entities/users.entities";
import { TUser, TUserRequest } from "../../interfaces/user.interface";

const createUserService = async (userData: TUserRequest): Promise<TUser> =>{

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User= userRepository.create(userData)
    await userRepository.save(user)

    const returnUser:TUser = userSchema.parse(user)

    return returnUser
}

export default createUserService