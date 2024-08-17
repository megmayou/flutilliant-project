require("dotenv").config();

const mainConnectionMongoDb = require("./database/connect");
const app = require("./app/config");

/** CONNEXION A MONGO DB */
(async () => {
  await mainConnectionMongoDb();
})();

/** LANCEMENT DU SERVEUR */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
