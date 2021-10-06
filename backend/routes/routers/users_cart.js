const express = require("express");

const {
    addToCart,
    getCartOrdersByUserId,
    clearCartOrders,
} = require("./../controllers/users_cart");

const usersCartRouter = express.Router();

usersCartRouter.post("/resturant/addToCart/:id", addToCart);
usersCartRouter.get("/cart/:id", getCartOrdersByUserId);
usersCartRouter.delete("/cart/:id", clearCartOrders);

module.exports = usersCartRouter;
