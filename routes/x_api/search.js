const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/search"
router.route("/search")
  .post(booksController.saveBook);
module.exports = router;
