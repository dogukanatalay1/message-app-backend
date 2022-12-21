const express = require('express');
const cors = require('cors');
const errorHandler = require('./src/middlewares/error-handler.middleware');
const { Server } = require('socket.io');
const http = require('http');
const routes = require('./src/routes');
const app = express();
const socketController = require('./src/controllers/socket.controller');
require('dotenv').config();

require('./src/loaders/db-connection');

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('welcome');
});

app.use('/chat', routes.chat);

app.use(errorHandler);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:8080',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        transports: ['websocket', 'polling'],
    },
    allowEIO3: true,
});

socketController.handleSocketConnections(io);

server.listen(PORT, () => {
    console.log(`Chat server is running on ${PORT}`);
});
