const router = require("express").Router();
const bookRoutes = require("./search");

// Book routes
router.use("/", bookRoutes);

module.exports = router;
