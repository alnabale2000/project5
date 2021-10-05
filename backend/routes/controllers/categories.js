const { query } = require("./../../db/db");
const connection = require("./../../db/db");

const addCategory = (req, res) => {
    const id = req.params.id;
    console.log("id", id);

    const categoryName = req.body.categoryName;
    const query = `INSERT INTO categories (categoryName,resturant_id)VALUES (?,?) ;`;
    const data = [categoryName, id];
    console.log("id", id);
    connection.query(query, data, (err, result) => {
        res.status(201).json("Category Added");
    });
};

module.exports = {
    addCategory,
};
