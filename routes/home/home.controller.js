const express = require("express");
const homeService = require("./home.service");
const router = express.Router();

// Routes
router.get("/", homepage);

module.exports = router;

function homepage(_req, res, next) {
  homeService.homepage()
    .then(homepage => res
      .status(200)
      .setHeader("Content-Type", "text/html")
      .send(homepage))
    .catch(err => next(err));
}