import { Request, Response, NextFunction } from "express";

export const catchAsync = (fn: any) => {
    return (req: Request, res: Response, _next: NextFunction) => {
        fn(req, res, _next).catch((_err: any) => _next());
    };
};
