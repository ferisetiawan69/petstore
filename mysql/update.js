const db = require("../config/db")

let updateQuery = `UPDATE store SET quantity = ? WHERE id = ?`
let data = ["Quantity bertambah 4, total menjadi 5 items", 1]
db.query(updateQuery, data, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});

// PET
let updateQueryPet = `UPDATE pet SET name = ? WHERE id = ?`
let dataPet = ["Mengganti Mainecon Cat menjadi Somali Cat", 3]
db.query(updateQueryPet, dataPet, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});

// USER
let updateQueryUser = `UPDATE user SET username = ? WHERE id = ?`
let dataUser = ["Mengganti Feitan Portor menjadi Neon Nostrade", 3]
db.query(updateQueryUser, dataUser, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});