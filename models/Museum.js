const mongoose = require('mongoose');

const MuseumSchema = mongoose.Schema({
    namamuseum: {
        type: String,
        required: true
    },
    negara:{
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Museum', MuseumSchema)