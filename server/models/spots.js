const mongoose = require('mongoose')
const Spots = new mongoose.Schema({
    latitude : {
        type : Number
    },
    longitude : {
        type : Number
    }
})
const spots = mongoose.model('Spots', Spots)
module.exports = spots