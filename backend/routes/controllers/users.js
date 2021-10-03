const connection = require("./../../db/db");
const bcrypt = require("bcrypt");

const createNewAccount = async (req, res) => {
    const { username, email, password, phoneNumber } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO users(username,email,pass,phoneNumber) VALUES (?,?,?,?);`;
        const data = [username, email.toLowerCase(), hashedPassword, phoneNumber];

        connection.query(query, data, (err, result) => {
            res.status(201).json("User Added");
        });
    } catch (error) {
        console.log(error);
        res.status(404).json("Failed to create Account");
    }
};

module.exports = {
    createNewAccount,
};
