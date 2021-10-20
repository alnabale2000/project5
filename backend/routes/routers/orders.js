const express = require("express");

const {
    sendOrderToResturant,
    getOrdersByLoggedInUserId,
    rateRestaurant,
    getOrdersByResId,
    deleteOrder,
} = require("./../controllers/orders");

const ordersRouter = express.Router();

ordersRouter.post("/cart/:id/send_order", sendOrderToResturant);
ordersRouter.get("/orders/:id", getOrdersByLoggedInUserId);
ordersRouter.post("/rate", rateRestaurant);
ordersRouter.get("/resturant/:id/orders", getOrdersByResId);
ordersRouter.delete("/resturant/:id/orders", deleteOrder);

module.exports = ordersRouter;
