import { Request, Response, NextFunction } from "express";
import Contact from "../models/contactModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";

export const getAllContacts = catchAsync(
    async (_req: Request, res: Response) => {
        const contact = await Contact.find({ isBlocked: false });
        res.status(200).json({
            status: "success",
            results: contact.length,
            data: {
                contact,
            },
        });
    }
);

export const getBlockedContacts = catchAsync(
    async (_req: Request, res: Response) => {
        const blockContact = await Contact.find({ isBlocked: true });
        res.status(200).json({
            status: "success",
            results: blockContact.length,
            data: {
                blockContact,
            },
        });
    }
);

export const getContactById = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
        const contact = await Contact.findById(req.params.contactId);

        if (!contact) {
            return _next(new AppError(`No Contact Found with that ID`, 404));
        }

        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    }
);

export const createContact = catchAsync(async (req: Request, res: Response) => {
    const contact = await Contact.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            contact,
        },
    });
});

export const unBlockContact = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            { isBlocked: false },
            {
                new: true,
            }
        );

        if (!contact) {
            return _next(new AppError(`No Contact Found with that ID`, 404));
        }

        res.status(200).json({
            status: "success",
            data: contact,
        });
    }
);

export const blockContact = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            { isBlocked: true },
            {
                new: true,
            }
        );

        if (!contact) {
            return _next(new AppError(`No Contact Found with that ID`, 404));
        }

        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    }
);

export const updateContact = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!contact) {
            return _next(new AppError(`No Contact Found with that ID`, 404));
        }

        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    }
);

export const deleteContact = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
        const contact = await Contact.findByIdAndDelete(req.params.contactId);

        if (!contact) {
            return _next(new AppError(`No Contact Found with that ID`, 404));
        }

        res.status(204).json({
            status: "success",
        });
    }
);
