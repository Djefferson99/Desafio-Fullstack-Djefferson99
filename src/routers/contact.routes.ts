import { Router } from 'express'
import ensureBodyValidMiddleware from '../middlewares/ensureBody.middlewares'
import { requestUserSchema, requestUserSchemaUpadate } from '../schemas/user.schema'
import ensureEmailExistd from '../middlewares/ensureEmail.middleware'
import ensureIdMiddleware from '../middlewares/ensureId.middleware'
import { createContactController, deleteContactController, listsContactController, updateContactController } from '../controllers/contact.controllers'

const contactRoutes: Router = Router()

contactRoutes.post('', ensureBodyValidMiddleware(requestUserSchema), ensureEmailExistd, createContactController )
contactRoutes.get('', listsContactController)
contactRoutes.patch('/:id', ensureBodyValidMiddleware(requestUserSchemaUpadate), ensureIdMiddleware, updateContactController)
contactRoutes.delete('/:id', ensureIdMiddleware, deleteContactController)

export default contactRoutes