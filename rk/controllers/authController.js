const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/AppError');

function signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

async function createSignToken(user, statusCode, req, res) {
    let token;
    token = await signToken(user._id);

    user.token = token;

    //removing password from the field
    user.password = undefined;

    res.status(statusCode).send({
        "status": "success",
        token,
        user
    })
}

//  sign up a user
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        "email": req.body.email,
        "password": req.body.password,
        "confirmPassword": req.body.confirmPassword
    });

    if (!newUser) {
        console.log('data saved');
        next(new AppError('something went wrong', 400));
    }

    req.user = newUser;
    createSignToken(newUser, 201, req, res);
})


//login the user
exports.login = catchAsync(async (req, res, next) => {
    // 1) Check if email and password exist
    const { email, password } = req.body;
    console.log(email, password)

    // 2) Check if user exists && password is correct
    if (!email || !password) {
        next(new AppError('enter the email and password'))
    }

    const user = await User.findOne({ email }).select(+password);
    if (!user || !(await user.correctPassword(password, user.password))) {
        console.log('user not found');
        return next(new AppError('user not found', 404));
    }
    console.log(user)

    // 3) If everything ok, send token to client
    createSignToken(user, 200, req, res);

});

