const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const router = require('./routes/noteRoutes')

connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',router)


app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.listen(3001,()=>{
    console.log('server is running')
})