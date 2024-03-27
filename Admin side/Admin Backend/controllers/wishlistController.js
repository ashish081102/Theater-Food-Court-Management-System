const db = require('../models')

const { Op } = require("sequelize");

// model
const WishList = db.wishlist



// // functions

// //1. Add Cart

const addWishlist = async (req, res) => {

    let data = {
        dish_id: req.body.dish_id,
        user_id: req.body.user_id,
    }

    const wishlist = await WishList.create(data)
    res.status(200).send(wishlist)

}

// 2. Get All Cart Item of Selected User

const getAllUserWishlist = async (req, res) => {

    let user_id = req.params['user_id']


    const cartItems = await db.sequelize.query(`
            SELECT
                wishlist.wishlist_id,
                users.user_id,
                dishes.dish_name,
                category.category_name,
                dishes.dish_price
            FROM    
                wishlist
            INNER JOIN 
                dishes ON dishes.dish_id = wishlist.dish_id
            INNER JOIN 
                users ON users.user_id = wishlist.user_id AND users.user_id = ${user_id}  
            INNER JOIN 
                category ON category.category_id = dishes.category_id AND dishes.dish_id = wishlist.dish_id
     `, { type: db.sequelize.QueryTypes.SELECT });

    res.status(200).send(cartItems)

}



const deleteWishlist = async (req, res) => {
    try {
        let id = req.params['wishlist_id']

        await WishList.destroy({ where: { wishlist_id: id } })

        res.status(200).send('Wishlist is deleted !')

    } catch (err) {
        res.status(400).send('not able to delete wishlist');
    }
}

module.exports = {
    getAllUserWishlist,
    addWishlist,
    deleteWishlist

}