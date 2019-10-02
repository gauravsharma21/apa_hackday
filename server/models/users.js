const mongoose = require('mongoose')
const request = require('request')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    PIS: {
        type: Number,
        trim: true,
        required: true,
        unique: true
    },
    DOB: {
        type: String,
        trim: true,
        required: true
    }
})
userSchema.statics.findbycreds = function (id, DOB, callback) {
    request({ uri: 'https://apaserver.herokuapp.com/info', json: true }, (err, res) => {
        if (err) {
            return callback('Unable to connect')
        }
        const data = res.body
        var user = undefined
        data.forEach((datajson) => {
            if (datajson.PIS === id) {
                user = datajson
            }
        })
        if (!user) {
            return callback('User not found')
        }
        if (user.DOB != DOB) {
            return callback('Invalid credentials')
        }
        callback(undefined, user)
    })
}
const User = mongoose.model('User', userSchema)
module.exports = User