const express = require('express');
const Post = require('../models/postModel');
const catchAsync = require('../utils/catchAsync');
const slugify = require('slugify');


exports.createPost = catchAsync(async (req, res, next) => {

    console.log(req.body)
    const { title, description, tags, coverTitle } = req.body.post;
    const { author } = req.body
    // const { originalname } = req.file;
    const slug = slugify(title, {
        replacement: '-',
        lower: true
    });

    const newPost = await Post.create({
        title,
        description,
        tags,
        slug,
        coverTitle,
        author
    });

    res.status(201).json({
        "status": "success",
        newPost
    })
});

exports.getAllPosts = catchAsync(async (req, res, next) => {
    console.log('getting all posts');
    const posts = await Post.find();

    res.status(200).send({
        "status": "success",
        posts
    })
});

exports.getPost = catchAsync(async (req, res, next) => {
    console.log('getting post , id', req.params.id);
    const { id } = req.params;
    const post = await Post.findOne({ _id: id })

    res.status(200).send({
        "success": "success",
        post
    })
});

exports.updatePost = catchAsync(async (req, res, next) => {
    console.log('editing the post');
    const { title, description, coverTitle, _id, tags } = req.body;
    const post = await Post.findOneAndUpdate({ _id }, { title, description, coverTitle, tags }, { new: true });
    post.save();
    res.status(200).json({
        status: "updated",
        post
    })
});



exports.deletePost = catchAsync(async (req, res, next) => {
    console.log('deleting the post');
    await Post.findOneAndDelete({ _id: req.params.id });
    res.status(400).send('post deleted')
});


exports.getMyPosts = catchAsync(async (req, res, next) => {
    console.log('getting my profile posts')
    const { id } = req.body;
    const doc = await Post.find().where({ 'author': id })
    res.status(200).send({
        status: 'success',
        posts: doc
    })
})