const express = require('express')
const cors = require('cors')

require("dotenv").config();

const app = express()

const cookieParser = require('cookie-parser');



app.use(cors());
app.use(express.json())

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/adminRoutes')
app.use('/api/admin', router)

//static Images Folder

const path = require('path')
app.use('/Images', express.static('./Images'))


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})