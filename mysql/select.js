const db = require("../config/db")

let selectQuery = `SELECT * FROM store`
db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    console.log("List Store: ", results);
});

// PET
let selectQueryPet = `SELECT * FROM pet`
db.query(selectQueryPet, function (error, results, fields) {
    if (error) throw error;
    console.log("List Pet: ", results);
});

// USER
let selectQueryUser = `SELECT * FROM user`
db.query(selectQueryUser, function (error, results, fields) {
    if (error) throw error;
    console.log("List User: ", results);
});