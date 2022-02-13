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

module.exports = router
