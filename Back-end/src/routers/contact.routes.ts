import { Router } from 'express'
import ensureBodyValidMiddleware from '../middlewares/ensureBody.middlewares'
import { requestUserSchemaUpadate } from '../schemas/user.schema'
import ensureIdMiddleware from '../middlewares/ensureId.middleware'
import { createContactController, deleteContactController, listsContactController, updateContactController } from '../controllers/contact.controllers'
import { requestContactSchema, requestContactSchemaUpadate } from '../schemas/contact.schema'
import ensureEmailExistdContact from '../middlewares/ensureEmailContact.middleware'
import ensureIdContactMiddleware from '../middlewares/ensureIdContact.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureToken.middlewares'

const contactRoutes: Router = Router()

contactRoutes.post('/:id', ensureBodyValidMiddleware(requestContactSchema), ensureTokenIsValidMiddleware, ensureEmailExistdContact, ensureIdMiddleware, createContactController )
contactRoutes.get('/:id',ensureIdMiddleware,ensureTokenIsValidMiddleware, listsContactController)
contactRoutes.patch('/:id', ensureBodyValidMiddleware(requestContactSchemaUpadate),ensureTokenIsValidMiddleware, ensureIdContactMiddleware, updateContactController)
contactRoutes.delete('/:id', ensureIdContactMiddleware, ensureTokenIsValidMiddleware, deleteContactController)

export default contactRoutes