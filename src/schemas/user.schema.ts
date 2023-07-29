import { z } from 'zod'

const userSchema  = z.object ({
    id: z.number(),
    name:z.string().max(45),
    email: z.string().email().max(45),
    telefone:z.number(),
    createdAt:z.string(),
})

const requestUserSchema = userSchema.omit({ 
    id: true, 
    createdAt: true
})

const responseArrayUserSchema = z.array(userSchema)

const requestUserSchemaUpadate = userSchema.omit({
    id: true, 
    createdAt: true, 
}).partial()

export {userSchema, requestUserSchema, responseArrayUserSchema, requestUserSchemaUpadate}