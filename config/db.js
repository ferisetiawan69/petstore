var mysql = require("mysql");
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "FSqa7100##**",
    database: "petstore_ferisetiawan",
    port: "3306"
});

module.exports = db