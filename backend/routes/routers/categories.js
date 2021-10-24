const express = require("express");

const {
    addCategory,
    getCategoriesByResturantId,
    getMealsByCategoryId,
    deleteCategory,
} = require("./../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/addCategory/:id", addCategory);
categoriesRouter.get("/categories/:id", getCategoriesByResturantId);
categoriesRouter.get("/resturants/categories/meals/:id", getMealsByCategoryId);
categoriesRouter.delete("/delete_category", deleteCategory);

module.exports = categoriesRouter;
