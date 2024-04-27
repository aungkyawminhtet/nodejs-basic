const router = require('express').Router();

router.get("/" , (req, res, next ) => {
    res.status(200).json({msg: "all post"});
});

router.post("/", (req, res, next) => {
    res.status(200).json({msg: "post is added"});
});

router.route("/:id")
    .get((req, res) => res.status(200).json({msg: "post one id " + req.params.id}))
    .patch((req, res, next) => res.status(200).json({msg: "post edit id " + req.params.id}))
    .delete((req, res, next) => res.status(200).json({msg: "delete post id " + req.params.id}))

module.exports = router; 