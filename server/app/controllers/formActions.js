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
      await formulaire.save();
      res.json({ message: "Formulaire enregistré avec succés" });
    })();
  } catch (err) {
    console.error(err);
    res.json({ message: "erreur !" });
  }
};

exports.findAll = (req, res) => {
  try {
    (async () => {
      const allFormulaire = await FormulaireModel.find();
      res.json(allFormulaire);
    })();
  } catch (err) {
    console.error(err);
    res.json({ message: "erreur !" });
  }
};

exports.findOneById = (req, res) => {
  try {
    (async () => {
      const formulaireById = await FormulaireModel.findById(req.params.id);
      res.json(formulaireById);
      console.log(req.params.id);
    })();
  } catch (err) {
    console.error(err);
    res.json({ message: "erreur !" });
  }
};
