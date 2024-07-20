const formulaire = require("../controllers/formActions");

module.exports = (app) => {
  app.post("/formulaires", formulaire.create);

  app.get("/formulaires", formulaire.findAll);

  app.get("/formulaires/:id", formulaire.findOneById);

  app.put("/formulaires/:id", formulaire.updateFormulaireById);

  app.delete("/formulaires/:id", formulaire.deleteFormulaireById);
};
