require('dotenv').config()
const port = process.env.API_PORT || 9999
const initMongoDB = require('./mongodb')
const express = require ('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()

//middleware
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())

const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)



initMongoDB()
app.listen(port, () => console.log (`WebApi is running on http://localhost:${port}`))