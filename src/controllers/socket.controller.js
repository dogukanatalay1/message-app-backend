// const userModel = require('../models/User.model.js');
// const messageModel = require('../models/Message.model.js');
// const chatModel = require('../models/Chat.model.js');

// const mongoose = require('mongoose');

const handleSocketConnections = (io) => {
    io.on('connection', (socket) => {
        io.emit('noOfConnections', Object.keys(io.sockets).length);

        socket.on('disconnect', () => {
            io.emit('noOfConnections', Object.keys(io.sockets).length);
        });

        socket.on('chat-message', (msg) => {
            socket.broadcast.emit('chat-message', msg);
            console.log(msg);
        });
        socket.on('joined', (name) => {
            socket.broadcast.emit('joined', name);
        });
        socket.on('leaved', (name) => {
            socket.broadcast.emit('leaved', name);
        });

        socket.on('typing', (data) => {
            socket.broadcast.emit('typing', data);
        });
        socket.on('stoptyping', () => {
            socket.broadcast.emit('stoptyping');
        });
    });
};

module.exports = { handleSocketConnections };
