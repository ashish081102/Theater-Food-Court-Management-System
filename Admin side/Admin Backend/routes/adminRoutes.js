// import controllers review, products
const categoryController = require('../controllers/categoryController.js')
const dishesController = require('../controllers/dishesController.js')
const adminController = require('../controllers/loginController.js')
const orderController = require('../controllers/orderController.js')
const orderMasterController = require('../controllers/orderMasterController.js')
const userController = require('../controllers/userRegistration.js')
const userCartController = require('../controllers/userCart.js')
const userWishlistController = require('../controllers/wishlistController.js')
// router
const router = require('express').Router()

//login

router.post('/adminlogin', adminController.adminLogin);

router.get('/checkAdmin', adminController.checkUser)


// Dishes routers
router.post('/addDish', dishesController.upload, dishesController.addDish)

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

router.post('/getSpecificDatesOrder', orderController.getSpecificDatesOrder);


// User signup

router.post('/userSignUp', userController.addUser);
router.post('/userSignIn', userController.userLogin)


// User cart

router.get('/getCartDetails/:user_id', userCartController.getAllUserCartItem);

router.get('/addCartData', userCartController.getAllUserCartItem);

router.get('/plusQuntityCart/:cart_id', userCartController.plusCartQunatity)

router.get('/minusQuntityCart/:cart_id', userCartController.minusCartQunatity)

router.delete('/deleteCart/:cart_id', userCartController.deleteCart)

//  User wishlist

router.get('/getWishlistDetail/:user_id', userWishlistController.getAllUserWishlist)

router.delete('/delteWishlist/:wishlist_id', userWishlistController.deleteWishlist)


module.exports = router