import { Request, Response } from 'express'
import { TUser, TUserRequest, TUserRequestUpdate } from '../interfaces/user.interface'
import createContactService from '../services/contact/createContact.service'
import listContactService from '../services/contact/listContact.service'
import updateContactService from '../services/contact/updateContact.service'
import deleteContactService from '../services/contact/deleteContact.service'





export const createContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const contactData: TUserRequest = req.body

    const newContact = await createContactService(contactData)

    return res.status(201).json(newContact)
}

export const listsContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const contacts = await listContactService()

    return res.status(200).json(contacts)
}

export const updateContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const contactData: TUserRequestUpdate = req.body
    const contactId: number = parseInt(req.params.id)
 
    const newContactData:TUser = await updateContactService(
        contactData,
        contactId
    )
    return res.status(200).json(newContactData)
}

export const deleteContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const contactId: number = parseInt(req.params.id)

    await deleteContactService(contactId)

    return res.status(204).send()
}