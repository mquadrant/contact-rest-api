import { Request, Response } from "express";
// import uuidv1 from "uuid/v1";
import contacts from "../../data/contacts.json";
// import IContact from "./interface";

export const getContacts = (_req: Request, res: Response) => {
    const unblockContact = contacts.filter(
        (contact: any) => contact.isBlocked === false
    );
    res.status(200).json({
        status: "success",
        results: unblockContact.length,
        data: { unblockContact },
    });
};

export const getBlockedContacts = (_req: Request, res: Response) => {
    const blockContact = contacts.filter(
        (contact: any) => contact.isBlocked === true
    );
    res.status(200).json({
        status: "success",
        results: blockContact.length,
        data: { blockContact },
    });
};

export const getContact = (req: Request, res: Response) => {
    const contactID = req.params.contactId;
    const contact = contacts.filter((contact: any) => contact.id === contactID);
    if (!contact.length) {
        res.status(404).json({ status: "fail", message: "Invalid ID" });
    } else if (!contact[0].isBlocked)
        res.status(200).json({ status: "success", data: contact[0] });
    else
        res.status(404).json({
            status: "fail",
            message: "contact blocked",
        });
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
// export const createContact = (req:Request, res:Response) => {
//     const contact = new CreateContact(req.body);
//     contact
//         .save()
//         .then((contact: any) => {
//             res.status(201).json({ data: contact });
//         })
//         .catch((_err: any) => {
//             res.status(400).send("unable to save to database");
//         });
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
