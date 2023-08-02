import { Request, Response } from 'express'
import createContactService from '../services/contact/createContact.service'
import listContactService from '../services/contact/listContact.service'
import updateContactService from '../services/contact/updateContact.service'
import deleteContactService from '../services/contact/deleteContact.service'
import { TContact, TContactRequest, TContactRequestUpdate } from '../interfaces/contact.interfaces'


export const createContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const contactData: TContactRequest  = req.body
    const userId: number = parseInt(req.params.id)

    const newContact = await createContactService(userId, contactData)

    return res.status(201).json(newContact)
}

export const listsContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const userId: number = parseInt(req.params.id)
        
        const contacts = await listContactService(userId)
    
        return res.status(200).json(contacts)   
    } catch (error) {
        return res.status(404).json({ error: `User not found.`});
    } 
}
export const updateContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    
    const contactData: TContactRequestUpdate = req.body
    const contactId: number = parseInt(req.params.id)
 
    const newContactData:TContact = await updateContactService(
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