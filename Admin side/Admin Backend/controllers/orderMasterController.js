const db = require('../models')

// model
const OrderMaster = db.orderMaster

// functions

//1. Add Order

const addOrderMaster = async (req, res) => {



    let data = {
        user_id: req.body.user_id,
        order_date: new Date(),
        total_price: req.body.total_price,
        payment_status: req.body.payment_status,

    }

    const Order = await OrderMaster.create(data)
    res.status(200).send(Order)

}




module.exports = {
    addOrderMaster

}