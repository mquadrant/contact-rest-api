import express from "express";
import AppError from "../utils/appError";

//handling invalid database id
const handleCastErrorDb = (err: any) => {
    const message = `Invalid ${err.path}:${err.value}.`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDb = (err: any) => {
    const error = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value ${error}: Please use another value!`;
    return new AppError(message, 400);
};

const handleValidationErrorDB = (err: any) => {
    const errors = Object.values(err.errors).map((el: any) => el.message);
    const message = `Invalid input data. ${errors.join(". ")}`;
    return new AppError(message, 400);
};

const sendErrorDev = (err: any, res: express.Response) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        stack: err.stack,
    });
};

const sendErrorProd = (err: any, res: express.Response) => {
    //operational error that we trust and send message to the client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
        //programming or other unknown error: dont leak error detail
    } else {
        // log the error
        console.error("ERROR", err);
        //send the generic error message
        res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};

export = (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    // render the error page
    if (process.env.NODE_ENV === "development") {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === "production") {
        let error = { ...err };

        if (error.name === "CastError") error = handleCastErrorDb(error);
        if (error.code === 11000) error = handleDuplicateFieldsDb(error);
        if (error.name === "ValidationError")
            error = handleValidationErrorDB(error);

        sendErrorProd(error, res);
    }
};
