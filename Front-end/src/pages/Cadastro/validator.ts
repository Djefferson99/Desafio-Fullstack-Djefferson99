import * as z from 'zod';

export const schema = z.object({
  name: z.string().max(50).nonempty('O nome é obrigatório.'),
  email: z.string().email('Digite um email válido.').nonempty('O email é obrigatório.'),
  password: z.string().max(20).nonempty('A senha é obrigatória.'),
  telefone: z.string().max(15).nonempty('O telefone é obrigatório.'),
});
