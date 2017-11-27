const router = require("express").Router();
const emailRoutes = require("./email");

// Book routes
router.use("/email", emailRoutes);

module.exports = router;
