const express = require("express")
const petstoreRoute = require("../controller/petstore.controller")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Hello petstore" })
})

router.get("/store", petstoreRoute.listStore)
router.post("/store", petstoreRoute.insertStore)
router.put("/store/:id", petstoreRoute.updateStore)
router.delete("/store/:id", petstoreRoute.deleteStore)

// PET
router.get("/pet", petstoreRoute.listPet)
router.post("/pet", petstoreRoute.insertPet)
router.put("/pet/:id", petstoreRoute.updatePet)
router.delete("/pet/:id", petstoreRoute.deletePet)

// // USER
router.get("/user", petstoreRoute.listUser)
router.post("/user", petstoreRoute.insertUser)
router.put("/user/:id", petstoreRoute.updateUser)
router.delete("/user/:id", petstoreRoute.deleteUser)

module.exports = router
