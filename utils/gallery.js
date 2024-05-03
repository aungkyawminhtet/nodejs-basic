const fs = require('fs');

const savefile = async(req, res, next) => {
    let photo = await req.files.file;
    let name = new Date().valueOf() + "_" + photo.name;
    await photo.mv(`./uploads/${name}`);
    req.body["name"] = name;
    next();
}


const saveFiles = async(req, res, next) => {
    let photos = await req.files.files;
    let phName = [];
    photos.forEach((ph) => {
        const name = new Date().valueOf() + "_ " + ph.name
        ph.mv(`./uploads/${name}`);
        phName.push(name);
    });

    req.body["name"] = phName.join(",");
    next();
}

const deletePhoto = async(filename) => {
    // console.log(filename);
    await fs.unlinkSync(`./uploads/${filename}`);
}


module.exports = {
    savefile,
    saveFiles,
    deletePhoto
}