// import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/errorController";

import indexRouter from "./routes/index";
import contactsRouter from "./routes/contacts";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1", contactsRouter);

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
    // next(createError(`Can\'t find ${_req.originalUrl} on this server`));
    next(new AppError(`Can\'t find ${_req.originalUrl} on this server`));
});

// error handler
app.use(globalErrorHandler);

export default app;
