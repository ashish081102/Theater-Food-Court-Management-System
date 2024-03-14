const db = require('../models')
const pdf = require('html-pdf');
const pdfTemplate = require('../pdf layout/index');
const { Op } = require("sequelize");
// model
const Order = db.order
// const Dishes = db.dishesishes
// const OrdersMaster = db.orderMaster
// const Category = db.category


// functions

//1. Add Order

const addOrder = async (req, res) => {

    let data = {
        dish_id: req.body.dish_id,
        // order_date: req.data.order_date,
        order_price: req.body.total_price,
        ordermaster_id: req.body.ordermaster_id,
    }

    const Order = await Order.create(data)
    res.status(200).send(Order)

}

// 2. Get All Order

const getAllOrder = async (req, res) => {

    const categories = await Order.findAll({})
    res.status(200).send(categories)

}

// get Specific dates of orders 

const getSpecificDatesOrder = async (req, res) => {

    // let category_name = req.body.category_name;
    // let start = req.body.start;
    // let end = req.body.end;
    let { category_name, start, end } = req.body;
    console.log(start + " " + end);
    const result = await db.sequelize.query(`
        SELECT
            category.category_name,
            dishes.dish_name,
            orders.order_id,
            ordersmaster.order_date,
            orders.order_price,
            COUNT(orders.order_id) as 'order_count'
        FROM
            orders
        INNER JOIN 
            dishes ON orders.dish_id = dishes.dish_id
        INNER JOIN 
            category ON category.category_id = dishes.category_id
        INNER JOIN
            ordersmaster ON ordersmaster.ordermaster_id = orders.ordermaster_id
        WHERE
            ordersmaster.order_date BETWEEN '${start}' and '${end}'
        GROUP BY
            orders.ordermaster_id
    `, { type: db.sequelize.QueryTypes.SELECT });

    pdf.create(pdfTemplate(result, start, end, category_name), {}).toFile(`${__dirname}/result.pdf`, (err) => {
        if (err) {
            res.send(err);
        }

        // console.log(__dirname + '/result.pdf')
        res.sendFile(`${__dirname}/result.pdf`);

    });

}


module.exports = {
    addOrder,
    getAllOrder,
    getSpecificDatesOrder,

}