const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        chats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'chat',
                required: true,
            },
        ],
    },
    { collection: 'User', timestamps: true }
);

const user = mongoose.model('User', userSchema);

module.exports = user;
