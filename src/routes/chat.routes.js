const chatController = require('../controllers/chat.controller');

const express = require('express');

const router = express.Router();

router.route('/').get(chatController.getAllMessages);
router.route('/deleteAll').delete(chatController.deleteAllMessages);

module.exports = router;
