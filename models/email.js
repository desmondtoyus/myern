module.exports = function (sequelize, DataTypes) {
    var Email =sequelize.define('email', {
        myemail:DataTypes.TEXT
    });
   return Email
} 


// module.exports = function (sequelize, DataTypes) {
//     var Library = sequelize.define('library', {
//         title: DataTypes.STRING,
//         author: DataTypes.STRING,
//         genre: DataTypes.STRING,
//         pages: DataTypes.INTEGER
//     })
//     return Library;
// }