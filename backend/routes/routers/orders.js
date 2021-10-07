const express = require("express");

const {
    sendOrderToResturant,
    getOrdersByLoggedInUserId,
    rateRestaurant,
} = require("./../controllers/orders");

const ordersRouter = express.Router();

ordersRouter.post("/cart/:id/send_order", sendOrderToResturant);
ordersRouter.get("/orders/:id", getOrdersByLoggedInUserId);
ordersRouter.post("/rate", rateRestaurant);

module.exports = ordersRouter;
