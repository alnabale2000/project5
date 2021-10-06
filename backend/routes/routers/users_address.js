const express = require("express");

const { addAddress } = require("./../controllers/users_address");

const usersAddressRouter = express.Router();

usersAddressRouter.post("/addAddress/:id", addAddress);

module.exports = usersAddressRouter;
