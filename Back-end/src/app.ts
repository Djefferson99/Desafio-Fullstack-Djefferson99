import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleErros } from "./error"
import usersRoutes from "./routers/users.routes"
import contactRoutes from "./routers/contact.routes"


const app = express()
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/contact', contactRoutes)

app.use(handleErros)

export default app