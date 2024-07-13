const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");

/** CONFIGURATION SERVEUR */
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "SALUT" });
});

/** CONNEXION A MONGO DB */
console.log(process.env.MONGO_DB_URL_CONNECTION);
async function mainConnectionMongoDb() {
  const client = new MongoClient(process.env.MONGO_DB_URL_CONNECTION);
  await client.connect();

  const db = client.db("projet_flutilliant");
  await db.createCollection("formulaires");

  const databaseList = await client.db().admin().listDatabases();

  console.log(databaseList);
}

try {
  mainConnectionMongoDb();
} catch (e) {
  console.log(e);
}

/** LANCEMENT DU SERVEUR */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
