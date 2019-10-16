const path = require("path");
const router = require("express").Router();
//const apiRoutes = require("./api");
const booksController = require("../controllers/booksController");

// API Routes
//router.use("/api", apiRoutes);

router.route("/api/saved")
  .get(booksController.savedBooks);

  router.route("/api/saved/:id")
  .delete(booksController.remove);

  router.route("/api/search")
  .post(booksController.saveBook);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
