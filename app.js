require('dotenv').config();
const path = require('path');
const express = require("express");
const server = express();
const cors = require('cors');
const fileupload = require('express-fileupload');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

server.use(cors());
server.use(express.json());
server.use(fileupload());

const postRoute = require("./routes/post");
const userRoute = require("./routes/user");
const catRoute = require("./routes/cat");
// const {savefile, saveFiles, deletePhoto } = require('./utils/gallery');

// server.use("/upload", express.static(path.join(__dirname, "uploads")))

server.use("/posts", postRoute);
server.use("/users",  userRoute);
server.use("/categories", catRoute);

server.use((err, req, res, next) => {
    err.status = err.status || 200;
    res.status(err.status).json({
        con: false,
        msg: err.message,
    })
})

server.get("*", (req, res, next) => {
    res.status(200).json({msg: "No Route Found!"});
});




server.listen(process.env.PORT, console.log(`Server is running in PORT - ${process.env.PORT}`));