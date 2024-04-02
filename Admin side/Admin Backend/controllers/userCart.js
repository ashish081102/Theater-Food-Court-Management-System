const db = require('../models');

const { Op } = require("sequelize");
const cartModel = require('../models/cartModel');
// model
const Cart = db.cart;



// // functions

// //1. Add Cart

const addCart = async (req, res) => {

    let data = {
        dish_id: req.body.dish_id,
        user_id: req.body.user_id,
        quantity: req.body.quantity
    };
    const cart = await Cart.create(data);
    res.status(200).send(cart);

};

// 2. Get All Cart Item of Selected User

const getAllUserCartItem = async (req, res) => {

    let user_id = req.params['user_id'];


    const cartItems = await db.sequelize.query(`
            SELECT
                cart.cart_id,
                users.user_id,
                dishes.dish_name,
                category.category_name,
                cart.quantity,
                dishes.dish_price
            FROM
                cart
            INNER JOIN 
                dishes ON dishes.dish_id = cart.dish_id
            INNER JOIN 
                users ON users.user_id = cart.user_id AND users.user_id = ${user_id}  
            INNER JOIN 
                category ON category.category_id = dishes.category_id AND dishes.dish_id = cart.dish_id
     `, { type: db.sequelize.QueryTypes.SELECT });

    res.status(200).send(cartItems);

};
// 3. update cart

const plusCartQunatity = async (req, res) => {
    try {
        let cart_id = req.params['cart_id'];

        const updatedCart = await Cart.update({ quantity: db.sequelize.literal('quantity + 1') }, { where: { cart_id: cart_id } });

        res.status(200).send(updatedCart);


    } catch (err) {
        res.status(400).send("");
    }
};
const minusCartQunatity = async (req, res) => {
    try {

        let cart_id = req.params['cart_id'];

        const updatedCart = await Cart.update({ quantity: db.sequelize.literal('quantity - 1') }, { where: { cart_id: cart_id } });

        res.status(200).send(updatedCart);
    } catch (err) {
        res.status(400).send("");
    }

};

const deleteCart = async (req, res) => {
    try {
        let id = req.params['cart_id'];

        await Cart.destroy({ where: { cart_id: id } });

        res.status(200).send('Category is deleted !');

    } catch (err) {
        res.status(400).send('not able to delete cart');
    }
};

module.exports = {
    getAllUserCartItem,
    addCart,
    plusCartQunatity,
    minusCartQunatity,
    deleteCart

};