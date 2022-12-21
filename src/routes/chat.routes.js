const chatController = require('../controllers/chat.controller');

const express = require('express');

const router = express.Router();

router.route('/').get(chatController.getAllMessages);

module.exports = router;
