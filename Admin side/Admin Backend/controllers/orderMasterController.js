const db = require('../models')

// model
const OrderMaster = db.orderMaster

// functions

//1. Add Order

const addOrderMaster = async (req, res) => {



    let data = {
        user_id: req.body.user_id,
        order_date: req.body.order_date,
        total_price: req.body.total_price,
        payment_type: req.body.payment_type,
        payment_status: req.body.payment_status,

    }

    const Order = await OrderMaster.create(data)
    res.status(200).send(Order)

}




module.exports = {
    addOrderMaster

}