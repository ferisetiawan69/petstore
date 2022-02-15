const db = require("../config/db")

let createQuery = `
CREATE TABLE IF NOT EXISTS store (
    id INT NOT NULL AUTO_INCREMENT,
    quantity VARCHAR(50) NULL DEFAULT NULL,
    shipDate DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE="utf8mb4_general_ci"
;
`

db.query(createQuery, function (error, results, fields) {
    if (error) throw error;
    console.log("Table has been created");
});

// PET
let createQueryPet = `
CREATE TABLE IF NOT EXISTS pet (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    cretedAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE="utf8mb4_general_ci"
;
`

db.query(createQueryPet, function (error, results, fields) {
    if (error) throw error;
    console.log("Table has been created");
});

// USER
let createQueryUser = `
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    cretedAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE="utf8mb4_general_ci"
;
`

db.query(createQueryUser, function (error, results, fields) {
    if (error) throw error;
    console.log("Table has been created");
});

// let alterQuery = "ALTER TABLE `todo` CHANGE COLUMN `description` `description` VARCHAR(255)";

// db.query(alterQuery, function (error, results, fields) {
//     if (error) throw error;
//     console.log("Table has been altered ");
// });