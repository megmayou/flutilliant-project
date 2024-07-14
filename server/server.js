const cors = require("cors");
const express = require("express");
require("dotenv").config();

const mainConnectionMongoDb = require("./database/connect");
const appRoutes = require("./app/routers/FormRouters");
/** CONFIGURATION SERVEUR */
const app = express();

app.use(cors());

app.use(express.json());

/** CONNEXION A MONGO DB */
(async () => {
  await mainConnectionMongoDb();
})();

/** ROUTES */
appRoutes(app);

/** LANCEMENT DU SERVEUR */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
