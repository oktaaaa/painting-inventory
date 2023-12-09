const mongoose = require('mongoose');

const MediumSchema = mongoose.Schema({
    namamedium: {
        type: String,
        required: true
    },
    baseingredient:{
        type: String,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Medium', MediumSchema)