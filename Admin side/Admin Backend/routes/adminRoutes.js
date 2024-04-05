// import controllers review, products

const categoryController = require('../controllers/categoryController.js')
const dishesController = require('../controllers/dishesController.js')
const adminController = require('../controllers/loginController.js')
const orderController = require('../controllers/orderController.js')
const orderMasterController = require('../controllers/orderMasterController.js')
const userController = require('../controllers/userRegistration.js')
const userCartController = require('../controllers/userCart.js')
const userWishlistController = require('../controllers/wishlistController.js')
const payemntController = require('../controllers/paymentController');
const ticketController = require('../controllers/ticketController.js')

const userPasswordRecovery = require("../controllers/userPasswordRecovery.js");

// router

const router = require("express").Router();

//login

router.post("/adminlogin", adminController.adminLogin);

router.post("/checkAdmin", adminController.checkAdminLogin);

// Dishes routers
router.post("/addDish", dishesController.upload, dishesController.addDish);

router.get("/allDishes", dishesController.getAllDishes);

router.get("/Dishes/:id", dishesController.getOneDish);

router.put("/Dishes/:id", dishesController.updateDishes);

router.delete("/Dishes/:id", dishesController.deleteDish);

router.put("/Dishes/:id", dishesController.updateDishes);

router.delete("/Dishes/:id", dishesController.deleteDish);

// Category Url and Controller

router.get("/getAllCategory", categoryController.getAllCategory);


router.post("/addCategory", categoryController.addCategory);

router.put("/updateCategory/:category_id", categoryController.updateCategory);

router.delete(
  "/deleteCategory/:category_id",
  categoryController.deleteCategory
);

// get dishes by category
router.get(
  "/getDishesByCategory/:category_id",
  dishesController.getDishesByCategory
);

// Order Master Route

router.post("/addOrderMaster", orderMasterController.addOrderMaster);
router.get("/getOrderMaster",orderMasterController.getOrderMaster)

// Order Route

router.get("/getAllOrder", orderController.getAllOrder);

router.post("/addOrder", orderController.addOrder);

router.post("/getSpecificDatesOrder", orderController.getSpecificDatesOrder);

router.post("/getSpecificDatesOrder", orderController.getSpecificDatesOrder);

router.get("/getUserOrder/:payment_id",orderController.getUserOrder)

// User signup

router.post("/userSignUp", userController.addUser);
router.post("/userSignIn", userController.userLogin);
router.post("/checkUser", userController.checkUserLogin);

// User cart

router.post("/add", userCartController.addCart);
router.get("/getCartDetails/:user_id", userCartController.getAllUserCartItem);

router.get("/addCartData", userCartController.getAllUserCartItem);

router.get("/plusQuntityCart/:cart_id", userCartController.plusCartQunatity);

router.get("/minusQuntityCart/:cart_id", userCartController.minusCartQunatity);

router.delete("/deleteCart/:cart_id", userCartController.deleteCart);

//  User wishlist

router.get(
  "/getWishlistDetail/:user_id",
  userWishlistController.getAllUserWishlist
);

router.delete(
  "/delteWishlist/:wishlist_id",
  userWishlistController.deleteWishlist
);


//user password recovery 

router.post("/forgot-password", userPasswordRecovery.forgotPassword);

router.get("/reset-password/:id/:token", userPasswordRecovery.resetPassword);
router.post(
  "/reset-password/:id/:token",
  userPasswordRecovery.resetPasswordPost
);

// ticket info
router.post('/checkUserTicket', ticketController.checkUserTicket)
// Payment routes

router.post('/checkout', payemntController.checkout)

router.post('/paymentVerify', payemntController.paymentVerification)

router.get('/getKey', payemntController.getKeyRazor)


module.exports = router;
