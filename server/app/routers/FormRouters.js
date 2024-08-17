const express = require("express");
const router = express.Router();

const {
  create,
  findAll,
  findOneById,
  updateFormulaireById,
  deleteFormulaireById,
} = require("../controllers/formActions");

router.post("/", create);
router.get("/:id", findAll);
router.get("/", findOneById);
router.put("/", updateFormulaireById);
router.delete("/:id", deleteFormulaireById);

module.exports = router;
