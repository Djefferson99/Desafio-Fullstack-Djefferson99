import { z } from 'zod';

const loginShema = z.object({
    email: z.string().email(),
    password: z.string()
})

export {
    loginShema
}