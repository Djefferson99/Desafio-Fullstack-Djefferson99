import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { compare } from "bcryptjs"
import jwt from 'jsonwebtoken'
import { AppError } from "../../error"
import { User } from "../../entities"
import { TLoginData } from "../../interfaces/login.interfaces"


const loginService = async (
    loginData: TLoginData
): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where: {
            email: loginData.email,
        },
    })

    if (!user) {
        throw new AppError('Invalid credentials', 401)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if (!passwordMatch) {
        throw new AppError('Invalid credentials', 401)
    }
    const token = jwt.sign(
        {
          ...user,
        }, 
        process.env.SECRET_KEY!, 
        {
          expiresIn: '24h',
          subject: String(user.id),
        }
      );

    return token
}

export default loginService