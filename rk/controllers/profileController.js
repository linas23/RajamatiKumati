const Profile = require('../models/profileModel')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const express = require('express')

exports.createProfile = catchAsync(async (req, res, next) => {
    console.log('creating profile')
    console.log(req.body)
    let { username, email, address, website, bio, userid } = req.body;
    // avatar = req.file.filename + '.' + req.file.mimetype.split("/")[1]
    let profile = await Profile.create({
        username, email, website, bio, address, userid
    })
    res.status(201).json({
        "status": "success",
        data: profile
    })
});
exports.updateProfile = catchAsync(async (req, res, next) => {
    console.log('updating profile')
    let { username, email, address, website, bio, _id } = req.body;
    let profile = await Profile.findByIdAndUpdate({ _id }, {
        username, email, website, bio, address,
    }, { new: true })
    await profile.save()
    res.status(201).json({
        "status": "success",
        data: profile
    })
});

exports.getProfile = catchAsync(async (req, res, next) => {
    console.log('getting profile')
    let { userid } = req.params
    let doc = await Profile.findOne({ userid });
    res.status(200).json({
        "status": "success",
        data: doc
    })
})