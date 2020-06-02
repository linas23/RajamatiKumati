const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "coverTitle": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "date": {
        type: Date,
        default: Date.now()
    },
    "slug": String,
    "tags": {
        type: Array,
        required: true
    },
    "author": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
/* "coverImage": {
    type: String,
    required: [true, "post must have an image"]
}, */

const Post = new mongoose.model('Post', postSchema);

module.exports = Post;