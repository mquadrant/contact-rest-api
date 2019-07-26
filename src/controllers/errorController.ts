import express from "express";

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
        sendErrorProd(err, res);
    }
};
