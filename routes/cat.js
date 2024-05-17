const router = require('express').Router();
const controller = require('../controllers/cat');
const {Schema} = require('../utils/schema');
const {validatebody, validateParm} = require('../utils/validator');
const {savefile} = require('../utils/gallery');

router.get("/", controller.all);

router.post("/",[savefile, validatebody(Schema.addCat), controller.post]);

router.route("/:id")
    .get(validateParm(Schema.allSchema.id, "id"),controller.get)
    .patch(savefile, validatebody(Schema.allSchema.image),  controller.patch)
    .delete( validateParm(Schema.allSchema.id, "id"),controller.drop);


module.exports = router;