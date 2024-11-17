import express, { Request, Response } from 'express'
import machineRoutes from './routes/machineRoutes'
import mongoose from 'mongoose'
import router from './routes'
const app = express()
const PORT = 8081

app.use(express.json())
// app.use('/', machineRoutes)
app.use('/', router());

mongoose.connect("mongodb+srv://admin:admin@cluster0.duou8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => { 
    console.log('Mongo DB Connected'); 
}) 
.catch((error) => { 
    console.error('Connection error', error); 
});
app.listen(PORT, () => {
    console.log(`Server is working on PORT: ${PORT}`)
})

