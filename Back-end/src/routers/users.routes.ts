import { Router } from 'express'
import { createUsersController, deleteUsersController, listsUsersController, updateUserController } from '../controllers/users.controllers'
import ensureBodyValidMiddleware from '../middlewares/ensureBody.middlewares'
import { requestUserSchema, requestUserSchemaUpadate } from '../schemas/user.schema'
import ensureEmailExistd from '../middlewares/ensureEmail.middleware'
import ensureIdMiddleware from '../middlewares/ensureId.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureToken.middlewares'

const usersRoutes: Router = Router()

usersRoutes.post('', ensureBodyValidMiddleware(requestUserSchema), ensureEmailExistd, createUsersController)
usersRoutes.get('', ensureTokenIsValidMiddleware, listsUsersController)
usersRoutes.patch('/:id', ensureBodyValidMiddleware(requestUserSchemaUpadate),ensureTokenIsValidMiddleware, ensureIdMiddleware, updateUserController)
usersRoutes.delete('/:id', ensureTokenIsValidMiddleware, ensureIdMiddleware, deleteUsersController)



export default usersRoutes