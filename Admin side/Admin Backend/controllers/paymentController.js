const Razorpay = require("razorpay");
const crypto = require("crypto");
const db = require("../models");

// model
const OrderMaster = db.orderMaster;
const Order = db.order;
const Cart = db.cart;
var instance = new Razorpay({
  key_id: process.env.REZORPAY_API_KEY,
  key_secret: process.env.REZORPAY_API_SECRET,
});

const checkout = (req, res) => {
  console.log(req.body.totalPrice);
  var options = {
    amount: Number(req.body.totalPrice) * 100, // amount in the smallest currency unit
    currency: "INR",
  };
  instance.orders.create(options, function (err, order) {
    res.status(200).send(order);
  });
};

const paymentVerification = async (req, res) => {
  console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  // console.log(req,body);
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.REZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  console.log(expectedSignature);
  if (isAuthentic) {
    const { user_id, total } = req.query;

    let data = {
      ordermaster_id: razorpay_payment_id,
      user_id,
      total_price: total,
    };

    const Order = await OrderMaster.create(data);
    insertAllCartInOrder(razorpay_payment_id, user_id, total);
    res.redirect(`http://localhost:5174/order/${razorpay_payment_id}`);
  } else {
    res.status(400).json({
      success: false,
    });
  }
  // res.status(200).json({ success: true })
};
const getKeyRazor = (req, res) => {
  res.status(200).json({ key: process.env.REZORPAY_API_KEY });
};
const insertAllCartInOrder = async (razorpay_order_id, user_id) => {
  const allCartItems = await db.sequelize.query(
    `
        SELECT cart.dish_id,cart.quantity,dishes.dish_price from cart INNER JOIN dishes on dishes.dish_id = cart.dish_id and cart.user_id = ${user_id}
    `,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  allCartItems.map((items) => {
    Order.create({
      user_id,
      dish_id: items.dish_id,
      ordermaster_id: razorpay_order_id,
      order_date: new Date(),
      order_price:items.dish_price * items.quantity
    });
  });

  await Cart.destroy({ where: { user_id: user_id } });
};
module.exports = {
  checkout,
  getKeyRazor,
  paymentVerification,
};
