const all = async (req, res, next) => {
    res.json({msg: "all users"});
}

const get = async(req, res, next) => {
    res.json({msg: "user get"});
}

const post = async(req, res, next) => {
    res.json({msg: "user added", result: req.body});
}

const patch = async(req, res, next) => {
    res.json({msg: "user update"});
}

const drop = async(req, res, next) => {
    res.json({msg: "delete user"});
}


module.exports = {
    all,
    get,
    post,
    patch,
    drop
}