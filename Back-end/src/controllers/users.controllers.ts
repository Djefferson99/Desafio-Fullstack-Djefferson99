import { Request, Response } from 'express'
import { TUser, TUserRequest, TUserRequestUpdate } from '../interfaces/user.interface'
import createUserService from '../services/users/createUser.service'
import listUsersService from '../services/users/listUsers.service'
import updateUserService from '../services/users/updateUsers.service'
import deleteUsersService from '../services/users/deleteUser.service'





export const createUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUserRequest = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

export const listsUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const users = await listUsersService()

    return res.status(200).json(users)
}

export const updateUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUserRequestUpdate = req.body
    const userId: number = parseInt(req.params.id)
 
    const newUserData:TUser = await updateUserService(
        userData,
        userId
    )
    return res.status(200).json(newUserData)
}

export const deleteUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id)

    await deleteUsersService(userId)

    return res.status(204).send()
}
