const mongoose = require('mongoose')
const validator = require('validator')


const profileSchema = new mongoose.Schema({
    "username": {
        type: String,
        // required: [true, 'A profile should have an username.']
    },
    "email": {
        type: String,
        // unique: true,
    },
    "address": {
        type: String
    },
    "website": {
        type: String
    },
    "bio": {
        type: String
    },
    "avatar": {
        type: String
    },
    "userid": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;