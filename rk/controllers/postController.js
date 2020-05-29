const express = require('express');
const Post = require('../models/postModel');
const catchAsync = require('../utils/catchAsync');
const slugify = require('slugify');


exports.createPost = catchAsync(async(req,res,next)=>{

    const { title,description,summary,photos } = req.body;

    const slug = slugify(title,{
        replacement:'-',
        lower:true
    });

    const newPost = await Post.create({
        title,
        description,
        summary,
        slug,
        photos
    });

    res.status(201).json({
        "status":"success",
        newPost
    })
});

exports.getAllPosts = catchAsync(async(req,res,next)=>{
    console.log('getting all posts');
    const posts = await Post.find();

    res.status(200).send({
        "status":"success",
        posts
    })
});

exports.getPost = catchAsync(async(req,res,next)=>{
    console.log('getting single post');
    const { slug } = req.params.slug;
    const post = await Post.findOne({ slug :slug})

    res.status(200).send({
        "success":"success",
        post
    })
});

exports.updatePost =catchAsync(async (req,res,next)=>{
    console.log('editing the post');
    const { title, summary , description,slug} = req.body;
    const post = await Post.findOneAndUpdate({title,summary,description,slug});
    post.save();
    res.status(200).json({
        status:"success",
        post
    })
});



exports.deletePost =catchAsync(async (req,res,next)=>{
    console.log('deleting the post');
    await Post.findOneAndDelete({slug:req.params.slug});
    res.status(400).send('post deleted')
});