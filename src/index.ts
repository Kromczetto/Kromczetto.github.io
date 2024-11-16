import express, { Request, Response } from 'express'
import machineRoutes from './routes/machineRoutes'
import mongoose from 'mongoose'

const app = express()
const PORT = 8081

app.use(express.json())
app.use('/', machineRoutes)

app.listen(PORT, () => {
    console.log("Server is working on PORT: 8081")
})

