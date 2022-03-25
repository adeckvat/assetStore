require('dotenv').config()
const express = require("express")
const models = require('./models/models')
const sequelize = require('./db')
<<<<<<< HEAD
const cors = require("cors")
const fileUpload = require('express-fileupload')
const router = require('./routes/index') 
const route = require('color-convert/route')
const errorHandler = require('./middleware/ErrorHandlingMidlleware')
const path = require('path')
=======
>>>>>>> f9e7968d61f3f0cdf0f0d947c835af8ec68de9e8

const PORT = process.env.PORT || 5000

const app = express()
<<<<<<< HEAD
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


// Обработка ошибок, последний Middleware
app.use(errorHandler)

=======


>>>>>>> f9e7968d61f3f0cdf0f0d947c835af8ec68de9e8
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on port', PORT))
    } catch (e) {
        console.log(e)
    }
}



start()
