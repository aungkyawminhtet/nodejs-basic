const Helper = require('../utils/Helper');
const DB = require('../dbs/post');


const all = async(req, res, next) => {
    const posts = await DB.find().populate('user', '-password -__v');
    Helper.fmsg(res, "all posts", posts);
}

const post = async(req, res, next) => {
    const posts = await new DB(req.body).save();
    Helper.fmsg(res, "posted", posts);
}

const get = async(req, res, next) => {
    const post = await DB.findById(req.params.id);
    Helper.fmsg(res, "one post", post);
}

const patch = async(req, res, next) => {
    const post = await DB.findById(req.params.id);
    if(post) {
        await DB.findByIdAndUpdate(post._id, req.body);
        const retpost = await DB.findById(post._id);
        Helper.fmsg(res, "update post", retpost);
    } else {
        next(new Error("Post id already updated"));
    }

}

const drop = async(req, res, next) => {
    await DB.findByIdAndDelete(req.params.id);
    Helper.fmsg(res, "delete post")
}


module.exports = {
    all,
    get,
    patch,
    drop,
    post
}