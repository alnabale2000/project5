const { query } = require("./../../db/db");
const connection = require("./../../db/db");

const sendOrderToResturant = async (req, res) => {
    const id = req.params.id;
    const date = new Date();
    console.log("t");

    const {
        mealName,
        mealPrice,
        Qty,
        totalPrice,
        city,
        neighborhood,
        house_number,
        additional_descreption,
        username,
        phone_number,
        resturant_id,
    } = req.body;

    const query = `INSERT INTO orders ( mealName,
        mealPrice,
        Qty,
        totalPrice,
        orderDateTime,
        city,
        neighborhood,
        house_number,
        additional_descreption,
        username,
        phone_number,
        resturant_id,
        userId)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);`;

    const data = [
        mealName,
        mealPrice,
        Qty,
        totalPrice,
        date,
        city,
        neighborhood,
        house_number,
        additional_descreption,
        username,
        phone_number,
        resturant_id,
        id,
    ];

    // const addOrder = await connection.promise().query(query, data);
    // if (!addOrder) return res.status(404).json(err);
    // res.status(201).json(addOrder[0]);
    connection.query(query, data, (err, result) => {
        if (err) return res.status(404).json(err);
        res.status(201).json("Order Sent");
    });
};

const getOrdersByLoggedInUserId = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM orders WHERE userId=?;`;
    const data = [id];
    const getOrders = await connection.promise().query(query, data);
    if (!getOrders) return res.status(404).json(err);
    res.status(201).json(getOrders[0]);
};

const rateRestaurant = async (req, res) => {
    const { rate, resturant_id } = req.body;
    const query = `INSERT INTO rates(rate,resturant_id)VALUES (?,?);`;
    const data = [rate, resturant_id];
    connection.query(query, data, (err, result) => {
        if (err) return res.status(404).json(err);
        res.status(201).json("Rated");
    });
};

module.exports = {
    sendOrderToResturant,
    getOrdersByLoggedInUserId,
    rateRestaurant,
};
