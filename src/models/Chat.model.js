const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'message',
                required: true,
            },
        ],
    },
    { collection: 'Chat', timestamps: true }
);

const chat = mongoose.model('Chat', chatSchema);

module.exports = chat;
