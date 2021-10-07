const { query } = require("../../db/db");
const connection = require("../../db/db");
const bcrypt = require("bcrypt");

const createNewResturant = async (req, res) => {
    const { resturantImage, resturantName, adress, plates, phoneNumber, email, password } =
        req.body;
    const rates = [4, 3];

    try {
        const date = new Date();
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO 
        resturants(resturantImage, resturantName, adress, plates, phoneNumber, email, pass,createdAt)
        VALUES (?,?,?,?,?,?,?,?);`;
        const data = [
            resturantImage,
            resturantName,
            adress,
            plates,
            phoneNumber,
            email.toLowerCase(),
            hashedPassword,
            date,
        ];

        connection.query(query, data, (err, result) => {
            if (err) res.status(404).json(err);
            res.status(201).json("Resturant Added");
        });
    } catch (error) {
        console.log(error);
        res.status(404).json("Failed to create Resturant Account");
    }
};
const getAllResturants = (req, res) => {
    const timeSort = req.body.timeSort;
    const rateFilter = req.body.rateFilter || 0;
    const query = `SELECT resturantImage,resturantName,plates,rates
    FROM resturants 
    WHERE rates >=${rateFilter}
    ORDER BY createdAt ${timeSort}
    ;`;

    connection.query(query, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};
const searchByName = (req, res) => {
    const resturantName = req.params.name;

    const query = `SELECT resturantImage,resturantName,plates,rates 
    FROM resturants
    WHERE resturantName LIKE N'%${resturantName}%'`;
    connection.query(query, (err, result) => {
        if (err) res.status(404).json(err);
        res.json(result);
    });
};

const getNewAddedResturant = (req, res) => {
    const query = `SELECT resturantImage,resturantName,plates,rates 
    FROM resturants
    ORDER BY createdAt DESC LIMIT 3;`;
    connection.query(query, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};

const getResturantDataById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT resturantImage,resturantName,plates,rates,adress,phoneNumber
    FROM resturants 
    WHERE id=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);
        res.status(200).json(result);
    });
};

const getTotalRate = (req, res) => {
    const id = req.params.id;
    const query = `SELECT AVG(rate) FROM rates WHERE resturant_id=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) res.status(404).json(err);

        const num = parseFloat(result[0]["AVG(rate)"]);
        res.status(200).json(num.toFixed(1));
    });
};

module.exports = {
    createNewResturant,
    getAllResturants,
    searchByName,
    getNewAddedResturant,
    getResturantDataById,
    getTotalRate,
};
