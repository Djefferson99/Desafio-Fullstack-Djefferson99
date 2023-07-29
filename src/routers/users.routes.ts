import { Router } from 'express'
import { createUsersController, deleteUsersController, listsUsersController, updateUserController } from '../controllers/users.controllers'
import ensureBodyValidMiddleware from '../middlewares/ensureBody.middlewares'
import { requestUserSchema, requestUserSchemaUpadate } from '../schemas/user.schema'
import ensureEmailExistd from '../middlewares/ensureEmail.middleware'
import ensureIdMiddleware from '../middlewares/ensureId.middleware'

const usersRoutes: Router = Router()

usersRoutes.post('', ensureBodyValidMiddleware(requestUserSchema), ensureEmailExistd, createUsersController)
usersRoutes.get('', listsUsersController)
usersRoutes.patch('/:id', ensureBodyValidMiddleware(requestUserSchemaUpadate), ensureIdMiddleware, updateUserController)
usersRoutes.delete('/:id', ensureIdMiddleware, deleteUsersController)

export default usersRoutes