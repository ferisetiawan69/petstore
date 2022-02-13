const db = require("../config/db")

let data = [
    {quantity: "1 item"},
    {quantity: "2 items"},
    {quantity: "3 items"},
]

data.forEach(value => {
    let insertQuery = `INSERT INTO store (quantity) VALUES (?);`
    db.query(insertQuery, value.quantity, function (error, result, fields) {
        if (error) throw error;
        console.log("Data has been inserted");
    });
});