const express = require("express");
const router = express.Router();

const { create } = require("../controllers/authActions");

router.post("/", create);

module.exports = router;
