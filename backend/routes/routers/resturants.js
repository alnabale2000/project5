const express = require("express");

const {
    createNewResturant,
    getAllResturants,
    searchByName,
    getNewAddedResturant,
    getResturantDataById,
} = require("./../controllers/resturants");

const ResturantsRouter = express.Router();

ResturantsRouter.post("/resturants", createNewResturant);
ResturantsRouter.get("/resturants", getAllResturants);
ResturantsRouter.get("/resturants/:name", searchByName);
ResturantsRouter.get("/", getNewAddedResturant);
ResturantsRouter.get("/resturant/:id", getResturantDataById);
// ResturantsRouter.get("/resturant/:id", getResturantDataById);

module.exports = ResturantsRouter;
