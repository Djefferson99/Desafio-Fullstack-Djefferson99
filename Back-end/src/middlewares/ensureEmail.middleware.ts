import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { User } from '../entities/users.entities'
import { AppDataSource } from '../data-source'
import { AppError } from '../error'

const ensureEmailExistd = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>{

    const email :string = req.body.email

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const emailRepository = await userRepository.findOneBy({
        email: email
    })

    if(emailRepository){
        throw new AppError('Email already exists', 409)
    }

    return next()
}

export default ensureEmailExistd