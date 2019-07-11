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
    (contact: any) => contact.id === parseInt(contactID)
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
  date: Date;
  constructor(contact: IContact) {
    this.first_name = contact.first_name;
    this.last_name = contact.first_name;
    this.phone = contact.first_name;
    this.email = contact.first_name;
    this.str_address = contact.first_name;
    this.gender = contact.first_name;
    this.company_name = contact.company_name;
    this.id = uuidv1();
    this.date = new Date();
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
      date: this.date,
      isBlocked: false
    });
  }
}

exports.getContacts = getContacts;
exports.getBlockedContacts = getBlockedContacts;
exports.getContact = getContact;
exports.CreateContact = CreateContact;
