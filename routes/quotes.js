const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//Post Routes - simplified for now
router.get("/", ensureAuth, quotesController.getQuote);

router.post("/createQuote", quotesController.createQuote);


module.exports = router;
