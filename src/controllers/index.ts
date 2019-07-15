'use strict';
import contacts from '../../data/contacts.json';
import uuidv1 from 'uuid/v1';

export function getContacts() {
    const unblockContact = contacts.filter(
        (contact: any) => contact.isBlocked === false
    );
    return unblockContact;
}
export function getBlockedContacts() {
    const blockContact = contacts.filter(
        (contact: any) => contact.isBlocked === true
    );
    return blockContact;
}
export function getContact(contactID: string) {
    const contact = contacts.filter(
        (contact: any) => contact.id === contactID && !contact.isBlocked
    );
    if (!contact.length) {
        throw new Error('Contact not found');
    }
    return contact[0];
}

interface IContact {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    str_address: string;
    gender: string;
    company_name: string;
}
export class CreateContact {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    str_address: string;
    gender: string;
    company_name: string;
    created: string;
    constructor(contact: IContact) {
        this.first_name = contact.first_name;
        this.last_name = contact.last_name;
        this.phone = contact.phone;
        this.email = contact.email;
        this.str_address = contact.str_address;
        this.gender = contact.gender;
        this.company_name = contact.company_name;
        this.id = uuidv1();
        this.created = `${new Date()}`;
    }
    save() {
        contacts.push({
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email,
            str_address: this.str_address,
            gender: this.gender,
            company_name: this.company_name,
            isBlocked: false,
            created: this.created,
        });
        return Promise.resolve(getContact(this.id));
    }
}

export function unBlockContact(contactID: string) {
    const contactId = contacts.findIndex(
        (contact: any) => contact.id === contactID
    );
    contacts[contactId].isBlocked = false;
    return Promise.resolve(getContact(contactID));
}
export function blockContact(contactID: string) {
    const contactId = contacts.findIndex(
        (contact: any) => contact.id === contactID
    );
    contacts[contactId].isBlocked = true;
    return Promise.resolve(getContact(contactID));
}
export function updateContact(contactID: string, contact: any) {
    const contactId = contacts.findIndex(
        (contact: any) => contact.id === contactID
    );
    contacts[contactId].first_name = contact.first_name;
    contacts[contactId].last_name = contact.last_name;
    contacts[contactId].phone = contact.phone;
    contacts[contactId].email = contact.email;
    contacts[contactId].str_address = contact.str_address;
    contacts[contactId].gender = contact.gender;
    contacts[contactId].company_name = contact.company_name;
    return Promise.resolve(contacts[contactId]);
}

export function deleteContact(contactID: string) {
    const contactId = contacts.findIndex(
        (contact: any) => contact.id === contactID
    );
    contacts.splice(contactId, 1);
    return 'Successfully deleted';
}
