const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
router.get("/years",BookController.getallYears)
router.get("/pages",BookController.allpages)
router.get("/INR",BookController.INRRuppe)
router.get("/data",BookController.particular)

module.exports = router;