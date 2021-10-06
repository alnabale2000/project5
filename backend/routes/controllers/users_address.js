const { query } = require("./../../db/db");
const connection = require("./../../db/db");

const addAddress = (req, res) => {
    const id = req.params.id;
    const { city, neighborhood, houseNumber, additionDescreption } = req.body;
    const query = `
    INSERT INTO users_address (userId,city,neighborhood,houseNumber,additionDescreption)
    VALUES (?,?,?,?,?)`;
    const data = [id, city, neighborhood, houseNumber, additionDescreption];
    connection.query(query, data, (err, result) => {
        // if (err) console.log(err);
        if (!result) res.json("Delete The Old Address And Try Again");
        else {
            res.status(201).json("Address Added Successfully ");
        }
    });
};

module.exports = {
    addAddress,
};
