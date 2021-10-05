const express = require("express");

const {
    addCategory,
    getCategoriesByResturantId,
    getMealsByCategoryId,
} = require("./../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/addCategory/:id", addCategory);
categoriesRouter.get("/categories/:id", getCategoriesByResturantId);
categoriesRouter.get("/resturants/categories/meals", getMealsByCategoryId);

module.exports = categoriesRouter;
