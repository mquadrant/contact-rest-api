import { Router } from "express";
var router = Router();

/* GET contacts listing. */
router.get("/contacts", function(_req, res) {
  res.send("respond with a resource");
});

router.get("/contacts/:contactId", function(_req, res) {
  res.json({ message: "You are in the home directory" });
});

export default router;
