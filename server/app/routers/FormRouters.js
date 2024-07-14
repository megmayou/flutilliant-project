const formulaire = require("../controllers/formActions");

module.exports = (app) => {
  app.post("/formulaires", formulaire.create);
};
