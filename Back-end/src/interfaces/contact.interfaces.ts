import { z } from 'zod'

import { DeepPartial } from 'typeorm'
import { contactSchema, requestContactSchema, requestContactSchemaUpadate, responseArrayContactSchema } from '../schemas/contact.schema'



type TContact = z.infer<typeof contactSchema>

type TContactRequest = z.infer<typeof requestContactSchema>

type TContactRequestUpdate = DeepPartial<typeof requestContactSchemaUpadate>

type TContactArrayResponse = z.infer<typeof responseArrayContactSchema>

export {TContact, TContactArrayResponse, TContactRequest, TContactRequestUpdate}