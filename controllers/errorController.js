const httpStatus = require("http-status-code");

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};
exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.internalServerError = (req, res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occord: ${error.status}`);
    res.status(errorCode);
    res.send(`${errorCode}| Sorry,our application is taking a nap!`);
};