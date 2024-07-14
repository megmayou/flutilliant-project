require("dotenv").config();
const mongoose = require("mongoose");
const createDatabaseAndTable = require("./models/FormRepository");

async function instanceConnectionDatabase() {
  await mongoose.connect(process.env.MONGO_DB_URL_CONNECTION);

  const Formulaire = createDatabaseAndTable();

  return Formulaire;
}

module.exports = instanceConnectionDatabase;
