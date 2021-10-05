const express = require("express");

const { addMeal } = require("./../controllers/meals");

const mealsRouter = express.Router();

mealsRouter.post("/addMeal", addMeal);

module.exports = mealsRouter;
