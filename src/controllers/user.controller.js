const ApiError = require('../scripts/responses/error/api-error');
const ApiDataSuccess = require('../scripts/responses/success/api-data-success');
// const BaseService = require('../services/base.service');
const userModel = require('../models/User.model.js');
const httpStatus = require('http-status');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res, next) => {
    const { name } = req.body;

    const user = new userModel({ name: name, id: uuidv4() });

    try {
        await user
            .save()
            .then(() => {
                ApiDataSuccess.send(
                    'User created!',
                    httpStatus.CREATED,
                    res,
                    user
                );
            })
            .catch((error) => {
                return next(
                    new ApiError(error.message, httpStatus.BAD_REQUEST)
                );
            });
    } catch (error) {
        return next(
            new ApiError(error.message, httpStatus.INTERNAL_SERVER_ERROR)
        );
    }
};

const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.send(users);
};

module.exports = { createUser, getAllUsers };
