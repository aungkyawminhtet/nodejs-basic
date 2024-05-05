const mongoose = require('mongoose');

const {Schema} = mongoose;

const CatShema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    createdAt : {type: Date, default: Date.now()}
});

const Cat = mongoose.model("category", CatShema);

module.exports = Cat;