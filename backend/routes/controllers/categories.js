const { query } = require("./../../db/db");
const connection = require("./../../db/db");

const addCategory = (req, res) => {
    const id = req.params.id;
    const categoryName = req.body.categoryName;
    const query = `INSERT INTO categories (categoryName,resturant_id)VALUES (?,?) ;`;
    const data = [categoryName, id];
    console.log("id", id);
    connection.query(query, data, (err, result) => {
        res.status(201).json("Category Added");
    });
};

const getCategoriesByResturantId = (req, res) => {
    const id = req.params.id;
    const query = `
    SELECT * FROM categories 
    WHERE resturant_id =?;
    `;
    const data = [id];

    connection.query(query, data, (err, result) => {
        res.status(200).json(result);
    });
};
const getMealsByCategoryId = (req, res) => {
    const id = req.body.id;
    const query = `
    SELECT * FROM meals 
    WHERE category_id=?
    ;
    `;
    const data = [id];

    connection.query(query, data, (err, result) => {
        res.status(200).json(result);
    });
};
module.exports = {
    addCategory,
    getCategoriesByResturantId,
    getMealsByCategoryId,
};
