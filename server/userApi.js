const express = require('express');
const path = require('path');
// const { router } = require('./server');
const userController = require('./userController')

const router = express.Router();

router.post('/login', userController.findUser);

module.exports = router;