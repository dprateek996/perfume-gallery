const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController.js');

// Route for registering a new user
router.post('/signup', registerUser);

// Route for logging a user in
router.post('/login', authUser);

module.exports = router;