const db = require("../config/db")

let deleteQuery = `DELETE FROM store WHERE id = ?`
let data = [1]
db.query(deleteQuery, data, function (err, deleted) {
    if (err) throw err;
    console.log(deleted);
});

// PET
let deleteQueryPet = `DELETE FROM pet WHERE id = ?`
let dataPet = [1]
db.query(deleteQueryPet, dataPet, function (err, deleted) {
    if (err) throw err;
    console.log(deleted);
});

// USER
let deleteQueryUser = `DELETE FROM user WHERE id = ?`
let dataUser = [1]
db.query(deleteQueryUser, dataUser, function (err, deleted) {
    if (err) throw err;
    console.log(deleted);
});