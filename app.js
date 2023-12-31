const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())
// routes okur
const lukisanRoutes = require('./routes/lukisan')
const artistRoutes = require('./routes/artist')
const mediumRoutes = require('./routes/medium')
const museumRoutes = require('./routes/museum')
const userRoutes = require('./routes/user')
// const multer = require('multer')



// const upload = multer({ storage: storage });

app.use('/lukisan', lukisanRoutes)
app.use('/artist', artistRoutes)
app.use('/medium', mediumRoutes)
app.use('/museum', museumRoutes)
app.use('/auth', userRoutes)
// app.use('/uploads', express.static('public/uploads'));
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