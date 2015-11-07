var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    models.User.findAll({
        include: [models.Task]
    }).then(function (users) {
        res.render("tasks", {title: "Users", users: users})
    });
});

module.exports = router;
