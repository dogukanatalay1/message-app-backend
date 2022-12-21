const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    { collection: 'Message', timestamps: true }
);

const message = mongoose.model('Message', messageSchema);

module.exports = message;
