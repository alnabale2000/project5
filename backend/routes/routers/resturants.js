const express = require("express");

const {
    createNewResturant,
    getAllResturants,
    searchByName,
} = require("./../controllers/resturants");

const ResturantsRouter = express.Router();

ResturantsRouter.post("/resturants", createNewResturant);
ResturantsRouter.get("/resturants", getAllResturants);
ResturantsRouter.get("/resturants/:name", searchByName);

module.exports = ResturantsRouter;
