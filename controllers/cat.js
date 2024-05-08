const DB = require('../dbs/cat');
const Helper = require('../utils/Helper');

const all = async(req, res, next) => {
    const cats = await DB.find();
    Helper.fmsg(res, "all cat", cats);
}

const post = async(req, res, next) => {
    const catname = await DB.findOne({name: req.body.name});
    
    if(catname){
        next(new Error("cat Name is already in use"));
        return;
    }

    const cat = await new DB(req.body).save();
    Helper.fmsg(res, "category is posted", cat);
}


const get = async(req, res, next)=> {
    const cat = await DB.findById(req.params.id);
    Helper.fmsg(res, "one post id fount", cat);
}

const patch = async(req, res, next) => {
    const cat = await DB.findById(req.params.id);
    if(cat) {
        await DB.findByIdAndDelete(cat._id, req.body);
        const retcat = await DB.findById(cat._id);
        Helper.fmsg(res, "cat is updated", retcat);
    } else {
        next(new Error("Cat is not found"));
    }

}


const drop = async(req, res, next) => {
    await DB.findByIdAndDelete(req.params.id);
    Helper.fmsg(res, "category is Deleted");
}

module.exports={
    all,
    get,
    post,
    patch,
    drop
}