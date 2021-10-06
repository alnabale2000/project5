const express = require("express");

const {
    addToCart,
    getCartOrdersByUserId,
    clearCartOrders,
    clearSingleCartOrder,
    addAddress,
} = require("./../controllers/users_cart");

const usersCartRouter = express.Router();

usersCartRouter.post("/resturant/addToCart/:id", addToCart);
usersCartRouter.get("/cart/:id", getCartOrdersByUserId);
usersCartRouter.delete("/cart/:id", clearCartOrders);
usersCartRouter.delete("/cart", clearSingleCartOrder);
usersCartRouter.post("/addAddress/:id", addAddress);

module.exports = usersCartRouter;
