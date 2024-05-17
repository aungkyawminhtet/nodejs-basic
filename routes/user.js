const router = require('express').Router();
const controller = require('../controllers/user');


router.get("/",  controller.all);

router.post("/register", controller.post);

router.post("/login", )

router.route("/:id")
    .get(controller.get)
    .patch(controller.patch)
    .delete(controller.drop)

module.exports = router