const router = require('express').Router();
const controller = require('../controllers/cat');
const {Schema} = require('../utils/schema');
const {validatebody} = require('../utils/validator');
const {savefile} = require('../utils/gallery');

router.get("/", controller.all);

router.post("/",[savefile, validatebody(Schema.addCat), controller.post]);

router.route("/:id")
    .get(controller.get)
    .patch(controller.patch)
    .delete(controller.drop);


module.exports = router;