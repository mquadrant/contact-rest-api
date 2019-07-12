import { Router } from "express";
const {
  getContacts,
  getBlockedContacts,
  getContact,
  CreateContact,
  unBlockContact,
  blockContact,
  updateContact,
  deleteContact
} = require("../controllers/index");
var router = Router();

router.get("/", function(_req, res, _next) {
  res.status(200).json({ message: "All is well" });
});
/* GET CONTACTS LISTING */
router.get("/contacts", function(_req, res) {
  const contacts = getContacts();
  res.status(200).json({ data: contacts });
});
/* GET BLOCKED CONTACTS */
router.get("/contacts/blocked", function(_req, res) {
  const contacts = getBlockedContacts();
  res.status(200).json({ data: contacts });
});
/* GET SPECIFIC CONTACT BY ID */
router.get("/contact/:contactId", function(_req, res) {
  try {
    const data = getContact(_req.params.contactId);
    res.status(200).json({ data });
  } catch (_e) {
    res.status(404).json({ error: "Contact not found" });
  }
});

/* ADD CONTACT*/
router.post("/contact", function(req, res) {
  const contact = new CreateContact(req.body);
  contact
    .save()
    .then((contact: any) => {
      res.status(201).json({ data: contact });
    })
    .catch((_err: any) => {
      res.status(400).send("unable to save to database");
    });
});

/* UNBLOCK CONTACT BY ID */
router.put("/contact/:contactId/unblock", function(_req, res) {
  try {
    unBlockContact(_req.params.contactId);
    res.status(200).send("Contact unblocked successfully!");
  } catch (_e) {
    res.status(404).json({ error: "An error occured, try again!" });
  }
});
/* BLOCK CONTACT BY ID */
router.put("/contact/:contactId/block", function(req, res) {
  try {
    blockContact(req.params.contactId);
    res.status(200).send("Contact blocked successfully!");
  } catch (_e) {
    res.status(404).json({ error: "An error occured, try again!" });
  }
});
/* UPDATE CONTACT BY ID */
router.put("/contact/:contactId", function(req, res) {
  try {
    const data = updateContact(req.body);
    res.status(201).json({ data: data });
  } catch (_e) {
    res.status(404).json({ error: "An error occured, try again!" });
  }
});
/* DELETE BY ID */
router.delete("/contact/:contactId", function(req, res) {
  try {
    const data = deleteContact(req.params.contactId);
    res.status(200).send(data);
  } catch (_e) {
    res.status(404).json({ error: "An error occured, try again!" });
  }
});

export default router;
