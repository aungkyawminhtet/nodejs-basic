require('dotenv').config();
const express = require("express");
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

server.use(cors());
server.use(express.json());

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

server.use("/posts", postRoute);
server.use("/users", userRoute);

server.get("*", (req, res, next) => {
    res.status(200).json({msg: "No Route Found!"});
});


server.listen(process.env.PORT, console.log(`Server is running in PORT - ${process.env.PORT}`));