const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/saved"
router.route("/saved")
  .get(booksController.savedBooks)

module.exports = router;
