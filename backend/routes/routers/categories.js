const express = require("express");

const { addCategory } = require("./../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/addCategory/:id", addCategory);

module.exports = categoriesRouter;
