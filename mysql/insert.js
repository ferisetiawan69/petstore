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

// PET
let dataPet = [
    {name: "Persian Cat"},
    {name: "Ragdoll Cat"},
    {name: "Mainecon Cat"},
]

dataPet.forEach(value => {
    let insertQueryPet = `INSERT INTO pet (name) VALUES (?);`
    db.query(insertQueryPet, value.name, function (error, result, fields) {
        if (error) throw error;
        console.log("Data has been inserted");
    });
});

// USER
let dataUser = [
    {username: "Killua Zoldyck"},
    {username: "Hisoka Morrow"},
    {username: "Feitan Portor"},
]

dataUser.forEach(value => {
    let insertQueryUser = `INSERT INTO user (username) VALUES (?);`

    db.query(insertQueryUser, value.username, function (error, result, fields) {
        if (error) throw error;
        console.log("Data has been inserted");
    });
});

