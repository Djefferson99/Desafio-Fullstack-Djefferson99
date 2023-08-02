import { z } from 'zod'

const userSchema  = z.object ({
    id: z.number(),
    name:z.string().max(45),
    password: z.string().max(120),
    email: z.string().email().max(45),
    telefone:z.string().max(10),
    createdAt:z.string(),
})

const requestUserSchema = userSchema.omit({ 
    id: true, 
    createdAt: true
})
const userSchemaResponse = userSchema.omit({
    password: true
})


const responseArrayUserSchema = z.array(userSchema)

const requestUserSchemaUpadate = userSchema.omit({
    id: true, 
    createdAt: true, 
    password: true
}).partial()

export {userSchema, requestUserSchema, responseArrayUserSchema, requestUserSchemaUpadate, userSchemaResponse}