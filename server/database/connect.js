require("dotenv").config();
const mongoose = require("mongoose");
const createSchemaForms = require("./models/FormRepository");
const createSchemaUsers = require("./models/UsersRepository");

async function instanceConnectionDatabase() {
  await mongoose.connect(process.env.MONGO_DB_URL_CONNECTION);

  const Formulaire = createSchemaForms();
  const Users = createSchemaUsers();

  return Formulaire, Users;
}

module.exports = instanceConnectionDatabase;
