const express = require('express');
const router = express.Router();


const postController = require('../controllers/postController');

router.get('/',postController.getAllPosts);
router.post('/createnewpost',postController.createPost);
router.get('/:slug',postController.getPost);

router.patch('/:slug',postController.updatePost);

router.delete('/:slug',postController.deletePost);

module.exports = router;