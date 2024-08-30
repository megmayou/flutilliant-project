const express = require("express");
const router = express.Router();

/* IMPORT ET UTILISATION DES ROUTES */

const formRouter = require("./FormRouters");
const usersRouter = require("./UsersRouters");

router.use("/formulaires", formRouter);
router.use("/users", usersRouter);

const authActions = require("../controllers/authActions");

router.post("/login", authActions.login);

module.exports = router;
