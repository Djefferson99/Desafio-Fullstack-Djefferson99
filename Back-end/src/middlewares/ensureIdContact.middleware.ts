import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { Contact } from '../entities/contact.entities'



const ensureIdContactMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>{
    
    const id = parseInt(req.params.id)
  
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const user = await contactRepository.findOneBy({
        id: id,
    })

    if (!user) {
        throw new AppError('User not a found', 404)
    }
    return next()
}

export default ensureIdContactMiddleware