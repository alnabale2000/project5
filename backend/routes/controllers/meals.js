const { query } = require("./../../db/db");
const connection = require("./../../db/db");

const addMeal = (req, res) => {
    const { id, mealName, mealImage, price, details } = req.body;
    const query = `
    INSERT INTO meals (category_id,mealName,mealImage,price,details)
    VALUES (?,?,?,?,?);`;
    const data = [id, mealName, mealImage, price, details];
    connection.query(query, data, (err, result) => {
        if (err) return res.status(404).json(err);
        res.status(201).json("Meal Added");
    });
};

module.exports = {
    addMeal,
};
