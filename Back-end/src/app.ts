import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleErros } from "./error"
import usersRoutes from "./routers/users.routes"
import contactRoutes from "./routers/contact.routes"
import { loginRoutes } from "./routers/login.routes"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))

app.use('/users', usersRoutes)
app.use('/contact', contactRoutes)
app.use('/login', loginRoutes)

app.use(handleErros)

export default app