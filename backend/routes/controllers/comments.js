const { query } = require("./../../db/db");
const connection = require("./../../db/db");

const addComment = (req, res) => {
    const id = req.params.id;
    const { comment, commenter } = req.body;
    const query = `INSERT INTO comments (comment,commenter,resturant_id)VALUES (?,?,?);`;
    const data = [comment, commenter, id];
    connection.query(query, data, (err, result) => {
        res.status(201).json("Comment Added");
    });
};
const getCommentsByResturantId = (req, res) => {
    const id = req.params.id;
    const query = `
    SELECT comment,commenter
    FROM comments 
    WHERE resturant_id=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) console.log(err);
        res.status(201).json(result);
    });
};

module.exports = {
    addComment,
    getCommentsByResturantId,
};
