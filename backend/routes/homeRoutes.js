const express = require("express");
const router = express.Router();
const homeRoutes = require("../controller/homeController");

router.route("/home").post(homeRoutes);
// router.route("/home").get();

module.exports = router;
