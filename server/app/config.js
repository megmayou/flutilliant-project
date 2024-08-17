const cors = require("cors");
const express = require("express");

/** CONFIGURATION SERVEUR */
const app = express();

app.use(cors());

app.use(express.json());

const apiRouter = require("./routers/router");
app.use("/api", apiRouter);

module.exports = app;
