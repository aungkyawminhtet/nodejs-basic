const Helper = require("../utils/Helper");
const DB = require('../dbs/user');

const all = async (req, res, next) => {
    const users = await DB.find();
    Helper.fmsg(res, "all users", users);
}

const get = async(req, res, next) => {
    const user = await DB.findById(req.params.id);
    Helper.fmsg(res, "one user", user);
}

const post = async(req, res, next) => {
    const username = await findOne({name: req.body.name});
    if(username){
        next(new Error("user Name is already exit"));
        return;
    }

    const userphone = await findOne({email: req.body.email});
    if(userphone) {
        next(new Error("User phone is already exit"));
        return
    }
    const data = await new DB(req.body);
    const newData = await data.save();
    Helper.fmsg(res, "user added", newData);
}

const login = async(req, res, next) => {
    res.status(200).json({msg: "this is login"});
}

const patch = async(req, res, next) => {
    const user = await DB.findById(req.params.id);
    if(user) {
        await DB.findByIdAndUpdate(user._id, req.body);
        let retUser = await DB.findById(user._id);
        Helper.fmsg(res, "update user", retUser);
    } else {
        next(new Error("Can't update with that id"));
    }
}

const drop = async(req, res, next) => {
    await DB.findByIdAndDelete(req.params.id);
    Helper.fmsg(res, "user is Deleted");
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop,
    login
}