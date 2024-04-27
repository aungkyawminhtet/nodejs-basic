 
const all = async(req, res, next) => {
    res.json({msg: "all post"});
}

const post = async(req, res, next) => {
    res.json({msg: "posted", result: req.body})
}

const get = async(req, res, next) => {
    res.json({msg: "post one"});
}

const patch = async(req, res, next) => {
    res.json({msg: "update post"});
}

const drop = async(req, res, next) => {
    res.json({msg: "delete post"});
}


module.exports = {
    all,
    get,
    patch,
    drop,
    post
}