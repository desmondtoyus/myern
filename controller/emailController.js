// var db = require("../models/email");
var db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  findAll: function (req, res) {
    db()
    .findAll({})
    .then(function (result) {
      res.json(result);
    })
      .catch(err => res.status(422).json(err));
  },
create: function (req, res) {
//  console.log(req);
db
.email.create({
    myemail:req.body.myemail})
  .then(function (result) {
      res.json(result);
    })
}


  // app.post('/api/lib', function (req, res) {
  //   db.library.create({
  //     title: req.body.title,
  //     author: req.body.author,
  //     genre: req.body.genre,
  //     pages: req.body.pages
  //   }).then(function (result) {
  //     res.json(result);
  //   })
  // })

  // app.put('/api/lib', function (req, res) {
  //   db.library.update({
  //     author: req.body.author,
  //     page: req.body.page,
  //     title: req.body.title,
  //     genre: req.body.genres
  //   }, {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function (result) {
  //       res.json(result)
  //     })
  // })
  // app.delete('/api/lib/:id', function (req, res) {
  //   db.library.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //   })

  // })

}