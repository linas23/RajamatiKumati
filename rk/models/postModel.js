const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    "title":{
        type:String,
        // required:true
    },
    "description":{
        type:String
    },
    "summary":{
        type:String
    },
    "date":{
        type:Date,
        default:Date.now()
    },
    "photos":{
        type: String,
        // required:[true,"post must have an image"]
    },
    "slug":String
})


const Post = new mongoose.model('Post',postSchema);

module.exports = Post;