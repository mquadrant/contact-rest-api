import { Router } from "express";
const {
  getContacts,
  getBlockedContacts,
  getContact
} = require("../controllers/index");
var router = Router();

router.get("/", function(_req, res, _next) {
  res.status(200).json({ message: "All is well" });
});
/* GET contacts listing. */
router.get("/contacts", function(_req, res) {
  const contacts = getContacts();
  res.status(200).json({ data: contacts });
});
router.get("/contacts/blocked", function(_req, res) {
  const contacts = getBlockedContacts();
  res.status(200).json({ data: contacts });
});

router.get("/contact/:contactId", function(_req, res) {
  try {
    const data = getContact(_req.params.contactId);
    res.status(200).json({ data });
  } catch (_e) {
    res.status(404).json({ error: "Contact not found" });
  }
});

export default router;
