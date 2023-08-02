import { z } from "zod";
import { loginShema } from "../schemas/login.schema";


type TLoginData = z.infer<typeof loginShema>

export {
    TLoginData
}