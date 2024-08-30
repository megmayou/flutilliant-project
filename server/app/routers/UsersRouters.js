const express = require("express");
const router = express.Router();

const { create, findUserById } = require("../controllers/usersActions");

// routes start with /api/users
router.post("/register", create);
router.get("/:id", findUserById);

module.exports = router;
