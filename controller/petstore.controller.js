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

// PET
function insertPet(req, res) {
    let data = req.body

    let insertQueryPet = `INSERT INTO pet (name) VALUES (?);`
    db.query(insertQueryPet, data.name, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: "Data has been inserted", data: data })
}

function listPet(req, res) {
    let selectQueryPet = `SELECT * FROM pet`

    db.query(selectQueryPet, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: "Data is found", data: results})
    });
}

function updatePet(req, res) {
    let updateQueryPet = `UPDATE pet SET name = ? WHERE id  = ?`
    let data = [req.body.name, req.params.id]

    db.query(updateQueryPet, data, function (error, result, fields) {
        if (error) throw error;
    })

    res.send({ message: "Data has been updated", data: req.body})
}

function deletePet(req, res) {
    let deleteQueryPet = `DELETE FROM pet WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQueryPet, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: "Data has been deleted" })
}

module.exports = {
    insertPet,
    listPet,
    updatePet,
    deletePet
}

// USER
function insertUser(req, res) {
    let data = req.body

    let insertQueryUser = `INSERT INTO user (username) VALUES (?);`

    db.query(insertQueryUser, data.username, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: "Data has been inserted", data: data })
}

function listUser(req, res) {
    let selectQueryUser = `SELECT * FROM user`

    db.query(selectQueryUser, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: "Data is found", data: results})
    });
}

function updateUser(req, res) {
    let updateQueryUser = `UPDATE user SET username = ? WHERE id  = ?`
    let data = [req.body.username, req.params.id]

    db.query(updateQueryUser, data, function (error, result, fields) {
        if (error) throw error;
    })

    res.send({ message: "Data has been updated", data: req.body})
}

function deleteUser(req, res) {
    let deleteQueryUser = `DELETE FROM user WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQueryUser, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: "Data has been deleted" })
}

module.exports = {
    insertUser,
    listUser,
    updateUser,
    deleteUser
}