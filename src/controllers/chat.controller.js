const ApiError = require('../scripts/responses/error/api-error');
const ApiDataSuccess = require('../scripts/responses/success/api-data-success');
const BaseService = require('../services/base.service');
const messageModel = require('../models/Message.model');
const { v4: uuidv4 } = require('uuid');
const httpStatus = require('http-status');

const createMessage = (msg, next, res) => {
    console.log(msg);

    const messageObject = {
        id: uuidv4(),
        text: msg.message,
        user: msg.user,
    };

    try {
        const createdMsg = BaseService.create(messageModel, messageObject);

        if (!createdMsg) {
            return new ApiError(
                'There have been an error!',
                httpStatus.BAD_REQUEST
            );
        }

        const data = createdMsg.toObject();

        ApiDataSuccess.send('Message created!', httpStatus.CREATED, res, data);
    } catch (error) {
        return new ApiError(error.message, httpStatus.INTERNAL_SERVER_ERROR);
    }

    console.log('created:', createMessage);
};

const getAllMessages = async (req, res) => {
    try {
        const messages = await BaseService.fetchAll(messageModel);

        if (!messages) {
            return new ApiError(
                'There have been an error!',
                httpStatus.NOT_FOUND
            );
        }

        const data = messages.map((doc) => doc.toObject());
        console.log(data);

        ApiDataSuccess.send('Messages fetched!', httpStatus.OK, res, data);
    } catch (error) {
        return new ApiError(error.message, httpStatus.INTERNAL_SERVER_ERROR);
    }
};

module.exports = { createMessage, getAllMessages };
