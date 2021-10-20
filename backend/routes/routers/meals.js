const express = require("express");

const { addMeal, deleteMeal } = require("./../controllers/meals");

const mealsRouter = express.Router();

mealsRouter.post("/addMeal", addMeal);
mealsRouter.delete("/delete_meal", deleteMeal);

module.exports = mealsRouter;
