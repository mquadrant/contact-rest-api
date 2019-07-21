import { Router } from "express";
import {
    getContacts,
    getBlockedContacts,
    getContact,
    // createContact,
    // unBlockContact,
    // blockContact,
    // updateContact,
    // deleteContact,
} from "../controllers/contactController";

var router = Router();

router.get("/", function(_req, res, _next) {
    res.status(200).json({ message: "All is well" });
});
/* GET CONTACTS LISTING */
router.get("/contacts", getContacts);
/* GET BLOCKED CONTACTS */
router.get("/contacts/blocked", getBlockedContacts);
/* GET SPECIFIC CONTACT BY ID */
router.get("/contacts/:contactId", getContact);

/* ADD CONTACT*/
// router.post("/contacts", createContact);

/* UNBLOCK CONTACT BY ID */
// router.put("/contacts/:contactId/unblock", function(_req, res) {
//     try {
//         unBlockContact(_req.params.contactId);
//         res.status(200).send("Contact unblocked successfully!");
//     } catch (_e) {
//         res.status(404).json({ error: "An error occured, try again!" });
//     }
// });
/* BLOCK CONTACT BY ID */
// router.put("/contacts/:contactId/block", async function(req, res) {
//     try {
//         await blockContact(req.params.contactId);
//         res.status(200).send("Contact blocked successfully!");
//     } catch (_e) {
//         res.status(404).json({ error: "An error occured, try again!" });
//     }
// });
/* UPDATE CONTACT BY ID */
// router.put("/contacts/:contactId", async function(req, res) {
//     try {
//         const data = await updateContact(req.params.contactId, req.body);
//         res.status(201).json({ data: data });
//     } catch (_e) {
//         res.status(404).json({ error: "An error occured, try again!" });
//     }
// });
/* DELETE BY ID */
// router.delete("/contacts/:contactId", async function(req, res) {
//     try {
//         const data = await deleteContact(req.params.contactId);
//         res.status(200).send(data);
//     } catch (_e) {
//         res.status(404).json({ error: "An error occured, try again!" });
//     }
// });

export default router;
