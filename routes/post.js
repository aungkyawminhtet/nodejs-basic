const router = require('express').Router();
const controller = require('../controllers/post');
const {all, get, post, patch, drop} = controller

router.get("/" , all);

router.post("/", post);

router.route("/:id")
    .get(get)
    .patch(patch)
    .delete(drop)

module.exports = router; 