const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/create').post(userController.createUser);

module.exports = router;
