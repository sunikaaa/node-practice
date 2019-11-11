"use strict";

const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    // res.render("error");
    res.send(`${errorCode}| the page does not exsist!`);
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occord: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode}| Sorry,our application is taking a nap!`);
};