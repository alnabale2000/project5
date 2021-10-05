const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const usersRouter = require("./routes/routers/users");
const authRouter = require("./routes/routers/auth");
const ResturantsRouter = require("./routes/routers/resturants");
const categoriesRouter = require("./routes/routers/categories");

//ResturantsRouter
app.use(usersRouter);
app.use(authRouter);
app.use(ResturantsRouter);
app.use(categoriesRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
