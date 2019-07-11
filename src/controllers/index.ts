"use strict";
const contacts = require("../../data/contacts.json");

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

exports.getContacts = getContacts;
exports.getBlockedContacts = getBlockedContacts;
exports.getContact = getContact;
