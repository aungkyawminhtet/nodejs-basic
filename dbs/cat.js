const mongoose = require('mongoose');

const {Schema} = mongoose;

const CatShema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    createdAt : {type: Date, default: Date.now()}
});

const Cat = mongoose.model("category", CatShema);

module.exports = Cat;