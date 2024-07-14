const mongoose = require("mongoose");

const Formulaires = require("../../database/models/FormRepository");

exports.create = (req, res) => {
  try {
    const formulaire = new Formulaires({
      nameClient: req.body.nameClient,
      adressClient: req.body.adressClient,
      contractNumber: req.body.contractNumber,
      dateVisit: req.body.dateVisit,
      comment: req.body.comment,
      articlesNumber: req.body.articlesNumber,
      salesFigures: req.body.salesFigures,
      dateVisitForecast: req.body.dateVisitForecast,
      articlesNumberForecast: req.body.articlesNumberForecast,
      salesFiguresForecast: req.body.salesFiguresForecast,
    });

    (async () => {
      await formulaire.save();
    })();
    console.info("Formulaire enregistré avec succés");
  } catch (err) {
    console.error(err);
  }
};
