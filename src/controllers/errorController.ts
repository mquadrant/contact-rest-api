import express from "express";

export = (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    // render the error page
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
    // res.render("error");
};
