var express = require ('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
const routes = require("./routes");
app.use(express.static("client/build"));
app.use(routes);

var db = require("./models");

db.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log('listening at localhost:', port);

    })
})