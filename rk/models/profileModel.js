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
        type: String,
        default: 'https://images.unsplash.com/photo-1500653504950-5a0179eeea8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    "userid": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;