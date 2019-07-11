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
/* GET blocked contacts */
router.get("/contacts/blocked", function(_req, res) {
  const contacts = getBlockedContacts();
  res.status(200).json({ data: contacts });
});
/* GET specific contact by ID */
router.get("/contact/:contactId", function(_req, res) {
  try {
    const data = getContact(_req.params.contactId);
    res.status(200).json({ data });
  } catch (_e) {
    res.status(404).json({ error: "Contact not found" });
  }
});

/* ADD contact*/
router.post("/contacts", function(_req, res) {
  const response = {
    first_name: _req.body.first_name,
    last_name: _req.body.last_name,
    phone: _req.body.phone,
    email: _req.body.email,
    str_address: _req.body.str_address,
    gender: _req.body.gender,
    company_name: _req.body.company_name
  };

  res.status(200).json({ response });
});

/* UNBLOCK contact by ID */
router.post("/contact/:contactId/unblock", function(_req, res) {
  try {
    const data = getContact(_req.params.contactId);
    res.status(200).json({ data });
  } catch (_e) {
    res.status(404).json({ error: "Contact not found" });
  }
});

export default router;
