const router = require('express').Router();

router.get("/", (req, res, next) => {
    res.status(200).json({msg: "all users"});
});

router.post("/", (req, res, next) => {
    res.status(200).json({msg: "user is posted"});
});

router.route("/:id")
    .get((req, res, next) => res.status(200).json({msg: "user one id " + req.params.id}))
    .patch((req, res, next) => res.status(200).json())

module.exports = router