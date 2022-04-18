import express from "express";
import db from "./config/database.js"
import cors from "cors"
import {
    handlerCreateCars, 
    handlerShowCars,
    handlerSearchCars,
    handlerUpdateCars,
    handlerDeleteCars
} from "./handler.js";

const app = express();
app.use(express.json())
app.use(cors())


// Database Connect
try {
    await db.authenticate()
    console.log('database connected')
} catch (error) {
    console.log('database error', error)
}


app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/api/cars/',handlerShowCars)
app.get('/api/cars/:id',handlerSearchCars)
app.put('/api/cars/:id',handlerUpdateCars)
app.post('/api/cars/',handlerCreateCars)
app.delete('/api/cars/:id',handlerDeleteCars)

app.listen(5000,() => console.log('Server running at localhost:5000'))