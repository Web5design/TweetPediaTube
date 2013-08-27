var errors = {
    send: function (res, message, code) {
        code = code || 500;

        var error = {
            message: message,
            code: code
        };

        res.status(code).send(JSON.stringify(error));
    }
};

module.exports = errors;