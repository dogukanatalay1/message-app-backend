const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URI;

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to db');
    })
    .catch((error) => {
        console.log(`Cannot connect db: ${error}`);
    });
