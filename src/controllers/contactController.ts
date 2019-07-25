import { Request, Response } from "express";
import Contact from "../models/contactModel";
// import IContact from "./interface";

export const getAllContacts = async (_req: Request, res: Response) => {
    try {
        const contact = await Contact.find({ isBlocked: false });
        res.status(200).json({
            status: "success",
            results: contact.length,
            data: {
                contact,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

export const getBlockedContacts = async (_req: Request, res: Response) => {
    try {
        const blockContact = await Contact.find({ isBlocked: true });
        res.status(200).json({
            status: "success",
            results: blockContact.length,
            data: {
                blockContact,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

export const getContactById = async (req: Request, res: Response) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

export const createContact = async (req: Request, res: Response) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                contact,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

export const unBlockContact = async (req: Request, res: Response) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            { isBlocked: false },
            {
                new: true,
            }
        );
        res.status(200).json({
            status: "success",
            data: contact,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

export const blockContact = async (req: Request, res: Response) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            { isBlocked: true },
            {
                new: true,
            }
        );
        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

export const updateContact = async (req: Request, res: Response) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};

export const deleteContact = async (req: Request, res: Response) => {
    try {
        await Contact.findByIdAndDelete(req.params.contactId);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        res.status(404).json({ status: "fail", message: err });
    }
};
