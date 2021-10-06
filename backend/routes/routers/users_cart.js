const express = require("express");

const { addToCart, getCartOrdersByUserId } = require("./../controllers/users_cart");

const usersCartRouter = express.Router();

usersCartRouter.post("/resturant/addToCart/:id", addToCart);
usersCartRouter.get("/cart/:id", getCartOrdersByUserId);

module.exports = usersCartRouter;
