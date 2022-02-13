const db = require("../config/db")

let updateQuery = `UPDATE store SET quantity = ? WHERE id = ?`
let data = ["Quantity bertambah 4, total menjadi 5 items", 1]
db.query(updateQuery, data, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});