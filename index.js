import express from "express";
import db from "./config/database.js"
import{
    handlerCreateCars,
    handlerShowCars
} from  "./handler.js"

const app = express();
app.use(express.json())



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
app.post('/api/input/',handlerCreateCars)
app.get('/api/show/',handlerShowCars)

app.listen(5000,() => console.log('Server running at localhost:5000'))