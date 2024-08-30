const express = require("express");
const router = express.Router();

const {
  create,
  findAll,
  findOneById,
  updateFormulaireById,
  deleteFormulaireById,
} = require("../controllers/formActions");

// routes start with /api/formulaires
router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOneById);
router.put("/", updateFormulaireById);
router.delete("/:id", deleteFormulaireById);

module.exports = router;
