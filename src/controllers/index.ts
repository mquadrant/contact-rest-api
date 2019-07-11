"use strict";
const contacts = require("../../data/contacts.json");
const uuidv1 = require("uuid/v1");

function getContacts() {
  const unblockContact = contacts.filter(
    (contact: any) => contact.isBlocked === false
  );
  return unblockContact;
}
function getBlockedContacts() {
  const blockContact = contacts.filter(
    (contact: any) => contact.isBlocked === true
  );
  return blockContact;
}
function getContact(contactID: string) {
  const contact = contacts.filter(
    (contact: any) => contact.id === contactID && !contact.isBlocked
  );
  if (!contact.length) {
    throw new Error("Contact not found");
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
class CreateContact {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  str_address: string;
  gender: string;
  company_name: string;
  created: Date;
  constructor(contact: IContact) {
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.phone = contact.phone;
    this.email = contact.email;
    this.str_address = contact.str_address;
    this.gender = contact.gender;
    this.company_name = contact.company_name;
    this.id = uuidv1();
    this.created = new Date();
  }
  save() {
    contacts.push({
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      email: this.email,
      address: this.str_address,
      gender: this.gender,
      company_name: this.company_name,
      isBlocked: false,
      created: this.created
    });
    return Promise.resolve(getContact(this.id));
  }
}

function unBlockContact(contactID: string) {
  const contactId = contacts.findIndex(
    (contact: any) => contact.id === contactID
  );
  contacts[contactId].isBlocked = false;
}

exports.getContacts = getContacts;
exports.getBlockedContacts = getBlockedContacts;
exports.getContact = getContact;
exports.CreateContact = CreateContact;
exports.unBlockContact = unBlockContact;
