import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import user from "./controller/user.controller"
import course from "./controller/course.controller"
import api from "./controller/api.controller"

const app = express()

app.use(bodyParser.json())

app.use(cors())
app.use(`/user`, user)
app.use(`/course`, course)
app.use(`/api`, api)

app.use((error, req, res, _next) => res.send(error.message))

export default app


