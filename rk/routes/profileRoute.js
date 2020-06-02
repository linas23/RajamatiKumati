const express = require("express");
const router = express.Router();


const profileController = require("../controllers/profileController");

router.post('/create', profileController.createProfile);
router.patch('/update', profileController.updateProfile);
router.get('/:userid', profileController.getProfile)
module.exports = router
