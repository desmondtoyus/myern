var emailController = require("../../controller/emailController");
var router = require ('express').Router();
var Sequelize = require("sequelize");
router.route('/')
    .get(emailController.findAll)
    .post(emailController.create);

    module.exports=router;