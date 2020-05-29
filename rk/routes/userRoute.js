const express = require('express');
const router = express.Router();


//controllers
const authController = require('../controllers/authController')


router.get('/',(req,res,next)=>{
    res.status(200).send('hello');
})

router.post('/signup',authController.signup);
router.post('/login',authController.login);

module.exports = router;