const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const usersRouter = require("./routes/routers/users");
app.use(usersRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
