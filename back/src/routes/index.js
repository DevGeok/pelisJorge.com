const express = require("express");
const movieRouter = require("./movieRouter");

const router = express.Router();

router.use("/movies",movieRouter)

module.exports = router;