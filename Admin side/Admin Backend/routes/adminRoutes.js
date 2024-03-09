// import controllers review, products
const categoryController = require('../controllers/categoryController.js')
const dishesController = require('../controllers/dishesController.js')
const adminController = require('../controllers/loginController.js')
const orderController = require('../controllers/orderController.js')
const orderMasterController = require('../controllers/orderMasterController.js')
// router
const router = require('express').Router()

//login

router.post('/adminlogin', adminController.adminLogin);

router.get('/checkAdmin', adminController.checkUser)


// Dishes routers
router.post('/addDish', dishesController.addDish)

router.get('/allDishes', dishesController.getAllDishes)

router.get('/Dishes/:id', dishesController.getOneDish)

router.put('/Dishes/:id', dishesController.updateDishes)

router.delete('/Dishes/:id', dishesController.deleteDish)



// Category Url and Controller

router.get('/getAllCategory', categoryController.getAllCategory)

router.post('/addCategory', categoryController.addCategory)

router.put('/updateCategory/:category_id', categoryController.updateCategory)

router.delete('/deleteCategory/:category_id', categoryController.deleteCategory)

// get dishes by category
router.get('/getDishesByCategory/:category_id', dishesController.getDishesByCategory)

// Order Master Route 

router.post('/addOrderMaster', orderMasterController.addOrderMaster);

// Order Route 

router.get('/getAllOrder', orderController.getAllOrder)

router.post('/addOrder', orderController.addOrder)

router.get('/getSpecificDatesOrder', orderController.getSpecificDatesOrder);




module.exports = router