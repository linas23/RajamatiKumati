const express = require('express');
const router = express.Router();


const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
router.get('/getMyPosts', postController.getMyPosts)
router.post('/createnewpost', postController.createPost);
router.get('/:id', postController.getPost);
router.patch('/:slug', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;