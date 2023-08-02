import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { AppError } from '../error'
import { Contact } from '../entities/contact.entities'

const ensureEmailExistdContact = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>{

    const email :string = req.body.email

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const emailRepository = await contactRepository.findOneBy({
        email: email
    })

    if(emailRepository){
        throw new AppError('Email already exists', 409)
    }

    return next()
}

export default ensureEmailExistdContact