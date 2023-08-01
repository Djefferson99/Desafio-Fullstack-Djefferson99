import { Repository } from 'typeorm'
import { User } from '../../entities/users.entities'
import { AppDataSource } from '../../data-source'


const deleteUsersService = async (userId: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId,
    })

    await userRepository.remove(user!)
}

export default deleteUsersService