const express = require("express");
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());

const postRoute = require("./routes/post");

server.use("/posts", postRoute);

server.get("*", (req, res, next) => {
    res.status(200).json({msg: "No Route Found!"});
});


server.listen(3000, console.log("Server is running in PORT 3000"));