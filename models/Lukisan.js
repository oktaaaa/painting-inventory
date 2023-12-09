const mongoose = require('mongoose')
const LukisanSchema = mongoose.Schema({
    inventoryID: {
        type: String,
        required: true
    },
    namaLukisan: {
        type: String,
        required: true
    },
    gambarLukisan: {
        type: String,
        required: true
    },
    tahun:{
        type: Number,
        required: true
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Artist"
    }, 
    medium:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Medium"
    }, 
    museum:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Museum"
    }, 
    status:{
        type: String,
        required: true
    }, 
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Lukisan', LukisanSchema)