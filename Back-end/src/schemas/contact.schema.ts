import { z } from "zod";

const contactSchema  = z.object ({
    id: z.number(),
    name:z.string().max(45),
    email: z.string().email().max(45),
    telefone:z.string().max(10),
    createdAt:z.string(),
})

const requestContactSchema = contactSchema.omit({ 
    id: true, 
    createdAt: true
})

const requestContactSchemaUpadate = contactSchema.omit({
    id: true, 
    createdAt: true
}).partial()

const responseArrayContactSchema = z.array(contactSchema)

export {contactSchema, requestContactSchema, requestContactSchemaUpadate, responseArrayContactSchema}
