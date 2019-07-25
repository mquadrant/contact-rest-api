import { Request, Response } from "express";
import Contact from "../models/contactModel";
// import uuidv1 from "uuid/v1";
// import contacts from "../../data/contacts.json";
// import IContact from "./interface";

export const getAllContacts = async (_req: Request, res: Response) => {
    try {
        const contact = await Contact.find();
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
// export class CreateContact {
//     id: string;

//     first_name: string;

//     last_name: string;

//     phone: string;

//     email: string;

//     str_address: string;

//     gender: string;

//     company_name: string;

//     created: string;

//     constructor(contact: IContact) {
//         this.first_name = contact.first_name;
//         this.last_name = contact.last_name;
//         this.phone = contact.phone;
//         this.email = contact.email;
//         this.str_address = contact.str_address;
//         this.gender = contact.gender;
//         this.company_name = contact.company_name;
//         this.id = uuidv1();
//         this.created = `${new Date()}`;
//     }

//     save() {
//         contacts.push({
//             uid: this.id,
//             first_name: this.first_name,
//             last_name: this.last_name,
//             phone: this.phone,
//             email: this.email,
//             str_address: this.str_address,
//             gender: this.gender,
//             company_name: this.company_name,
//             isBlocked: false,
//             created: this.created,
//         });
//         return Promise.resolve(getContact(this.id));
//     }
// }

// export function unBlockContact(contactID: string) {
//     const contactId = contacts.findIndex(
//         (contact: any) => contact.id === contactID
//     );
//     contacts[contactId].isBlocked = false;
//     return Promise.resolve(contacts[contactId]);
// }
// export function blockContact(contactID: string) {
//     const contactId = contacts.findIndex(
//         (contact: any) => contact.id === contactID
//     );
//     if (contactId >= 0) {
//         contacts[contactId].isBlocked = true;
//         return Promise.resolve("Contact blocked successfully!");
//     }
//     return Promise.reject("Sorry, something went wrong!");
// }
// export function updateContact(contactID: string, contact: any) {
//     const contactId = contacts.findIndex(
//         (contact: any) => contact.id === contactID
//     );
//     contacts[contactId].first_name = contact.first_name;
//     contacts[contactId].last_name = contact.last_name;
//     contacts[contactId].phone = contact.phone;
//     contacts[contactId].email = contact.email;
//     contacts[contactId].str_address = contact.str_address;
//     contacts[contactId].gender = contact.gender;
//     contacts[contactId].company_name = contact.company_name;
//     return Promise.resolve(contacts[contactId]);
// }

// export function deleteContact(contactID: string) {
//     const contactId = contacts.findIndex(
//         (contact: any) => contact.id === contactID
//     );
//     if (contactId >= 0) {
//         contacts.splice(contactId, 1);
//         return Promise.resolve("Successfully deleted");
//     }
//     return Promise.reject("Sorry, something went wrong!");
// }
