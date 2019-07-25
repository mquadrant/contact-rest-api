import { Router } from "express";
import {
    getAllContacts,
    getBlockedContacts,
    getContactById,
    createContact,
    unBlockContact,
    blockContact,
    updateContact,
    deleteContact,
} from "../controllers/contactController";

var router = Router();

router.get("/", function(_req, res, _next) {
    res.status(200).json({ message: "All is well" });
});
/* GET CONTACTS LISTING */
router.get("/contacts", getAllContacts);
/* GET BLOCKED CONTACTS */
router.get("/contacts/blocked", getBlockedContacts);
/* GET SPECIFIC CONTACT BY ID */
router.get("/contacts/:contactId", getContactById);

/* ADD CONTACT*/
router.post("/contacts", createContact);

/* UNBLOCK CONTACT BY ID */
router.patch("/contacts/:contactId/unblock", unBlockContact);
/* BLOCK CONTACT BY ID */
router.patch("/contacts/:contactId/block", blockContact);

/* UPDATE CONTACT BY ID */
router.put("/contacts/:contactId", updateContact);

/* DELETE BY ID */
router.delete("/contacts/:contactId", deleteContact);

export default router;
