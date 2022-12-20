class ApiDataSuccess {
    static send(message, statusCode, res, data) {
        res.status(statusCode).json({
            data: data,
            message,
            success: true,
        });
    }
}

module.exports = ApiDataSuccess;
