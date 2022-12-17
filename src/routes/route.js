const express = require('express');
const router = express.Router();


const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/book", UserController.createUser  )

router.get("/getBook", UserController.getUsersData)

module.exports = router;