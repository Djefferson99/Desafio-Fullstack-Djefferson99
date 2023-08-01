import { z } from 'zod'

import { DeepPartial } from 'typeorm'
import { requestUserSchema, requestUserSchemaUpadate, responseArrayUserSchema, userSchema } from '../schemas/user.schema'


type TUser = z.infer<typeof userSchema>

type TUserRequest = z.infer<typeof requestUserSchema>

type TUserRequestUpdate = DeepPartial<typeof requestUserSchemaUpadate>


type TUserArrayResponse = z.infer<typeof responseArrayUserSchema>

export {TUser, TUserRequest, TUserArrayResponse, TUserRequestUpdate}
