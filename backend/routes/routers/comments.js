const express = require("express");

const { addComment, getCommentsByResturantId } = require("./../controllers/comments");

const commentsRouter = express.Router();

commentsRouter.post("/resturants/:id/comments", addComment);
commentsRouter.get("/resturants/:id/comments", getCommentsByResturantId);

module.exports = commentsRouter;
