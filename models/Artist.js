const mongoose = require('mongoose')
const ArtistSchema = mongoose.Schema({
    namaArtist: {
        type: String,
        required: true
    },
    tahunLahir:{
        type: Number,
        required: true
    },
    tahunMeninggal:{
        type: Number,
        
    },
    periode: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    keterangan: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Artist', ArtistSchema)