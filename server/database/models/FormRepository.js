const mongoose = require("mongoose");

const formulaireSchema = new mongoose.Schema(
  {
    nameClient: {
      type: String,
      require: true,
    },
    adressClient: {
      type: String,
      require: true,
    },
    contractNumber: {
      type: String,
      require: true,
    },
    dateVisit: {
      type: Date,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    articlesNumber: {
      type: Number,
      require: true,
    },
    salesFigures: {
      type: Number,
      require: true,
    },
    dateVisitForecast: Date,
    articlesNumberForecast: Number,
    salesFiguresForecast: Number,
  },
  { timestamps: true }
);

const Formulaires = mongoose.model("formulaires", formulaireSchema);

module.exports = Formulaires;
