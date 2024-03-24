// import controllers review, products
const userController = require('../controllers/registerationUser.js')

// router
const router = require('express').Router()

//Sign-up

router.post('/userSignUp', userController.addUser);







module.exports = router