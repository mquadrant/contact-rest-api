import express from "express";

export = (
    err: any,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
};
