const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const  middleware= require("../middlewares/authentication")


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


router.get("/users/:userId",middleware.validation ,userController.getUserData)

router.put("/users/:userId",middleware.validation, userController.updateUser)

module.exports = router;