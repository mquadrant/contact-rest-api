import { Request, Response, NextFunction } from "express";

export = (fn: any) => {
    return (req: Request, res: Response, _next: NextFunction) => {
        fn(req, res, _next).catch((_err: any) => _next(_err));
    };
};
