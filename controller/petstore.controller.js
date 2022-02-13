const db = require("../config/db")

function insertStore(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO store (quantity) VALUES (?);`
    db.query(insertQuery, data.quantity, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: "Data has been inserted", data: data })
}

function listStore(req, res) {
    let selectQuery = `SELECT * FROM store`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: "Data is found", data: results})
    });
}

function updateStore(req, res) {
    let updateQuery = `UPDATE store SET quantity = ? WHERE id  = ?`
    let data = [req.body.quantity, req.params.id]

    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    })

    res.send({ message: "Data has been updated", data: req.body})
}

function deleteStore(req, res) {
    let deleteQuery = `DELETE FROM store WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: "Data has been deleted" })
}

module.exports = {
    insertStore,
    listStore,
    updateStore,
    deleteStore
}