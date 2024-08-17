const express = require("express");
const router = express.Router();

/* IMPORT ET UTILISATION DES ROUTES */

const formRouter = require("./FormRouters");
const authRouter = require("./AuthRouters");

router.use("/formulaires", formRouter);
router.use("/users", authRouter);

module.exports = router;
