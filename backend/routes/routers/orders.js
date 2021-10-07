const express = require("express");

const {
    sendOrderToResturant,
    getOrdersByLoggedInUserId,
    rateRestaurant,
    getOrdersByResId,
} = require("./../controllers/orders");

const ordersRouter = express.Router();

ordersRouter.post("/cart/:id/send_order", sendOrderToResturant);
ordersRouter.get("/orders/:id", getOrdersByLoggedInUserId);
ordersRouter.post("/rate", rateRestaurant);
ordersRouter.get("/resturant/:id/orders", getOrdersByResId);

module.exports = ordersRouter;
