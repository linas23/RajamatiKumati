const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    "email": {
        type: String,
        required: [true, "You must enter an email."],
        unique: true,
        validate: [validator.isEmail, "Enter a valid email"]
    },
    "password": {
        type: String,
        required: [true, "You must enter a password."]
    },
    "confirmPassword": {
        type: String,
        required: [true, "please confirm your password"],
        validate: {
            validator(el) {
                return el == this.password;
            },
            message: "Password do not match."
        }
    },
    "name": {
        type: String,
        minlength: [2, 'Enter a valid name']
    },
    /* "post":{
            type: mongoose.Schema.objectId,
            ref: 'posts'
    } */
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

userSchema.pre('save', async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.confirmPassword = undefined;
    next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;