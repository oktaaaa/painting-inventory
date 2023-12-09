const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// routes okur
const lukisanRoutes = require('./routes/lukisan')
const artistRoutes = require('./routes/artist')
const mediumRoutes = require('./routes/medium')
const museumRoutes = require('./routes/museum')

app.use('/lukisan', lukisanRoutes)
app.use('/artist', artistRoutes)
app.use('/medium', mediumRoutes)
app.use('/museum', museumRoutes)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true
})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))


db.once('open', () =>{
    console.log('database is connected');
})

app.listen(process.env.PORT, () => {
    console.log(`server pada http://localhost:${process.env.PORT}`);
})