const mongoose = require("mongoose");

const FormulaireModel = require("../../database/models/FormRepository");

exports.create = (req, res) => {
  try {
    const formulaire = new FormulaireModel({
      nameClient: req.body.nameClient,
      adressClient: req.body.adressClient,
      contractNumber: req.body.contractNumber,
      dateVisit: new Date(req.body.dateVisit),
      comment: req.body.comment,
      articlesNumber: req.body.articlesNumber,
      salesFigures: req.body.salesFigures,
      dateVisitForecast: req.body.dateVisitForecast,
      articlesNumberForecast: req.body.articlesNumberForecast,
      salesFiguresForecast: req.body.salesFiguresForecast,
    });

    (async () => {
      console.log(formulaire);
      await formulaire.save();
      res.json({ message: "Formulaire enregistré avec succés" });
    })();
  } catch (err) {
    console.error(err);
    res.json({ message: "erreur !" });
  }
};
