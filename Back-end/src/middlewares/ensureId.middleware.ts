import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { User } from '../entities'


const ensureIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>{
    
    const id = parseInt(req.params.id)
  
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: id,
    })

    if (!user) {
        throw new AppError('User notafound', 404)
    }
    return next()
}

export default ensureIdMiddleware