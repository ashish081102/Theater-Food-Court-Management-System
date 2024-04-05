const db = require("../models");
const pdf = require("html-pdf");
const pdfTemplate = require("../pdf layout/index");
const { Op } = require("sequelize");
// model
const Order = db.order;
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
  };

  const Order = await Order.create(data);
  res.status(200).send(Order);
};

// 2. Get All Order

const getAllOrder = async (req, res) => {
  try {
    const result = await db.sequelize.query(
      `
            SELECT
                *
            FROM
                orders
            INNER JOIN 
                dishes ON orders.dish_id = dishes.dish_id
        `,
      { type: db.sequelize.QueryTypes.SELECT }
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

// get Specific dates of orders

const getSpecificDatesOrder = async (req, res) => {
  // let category_name = req.body.category_name;
  // let start = req.body.start;
  // let end = req.body.end;
  let { category_name, start, end } = req.body;
  console.log(start + " " + end);
  const result = await db.sequelize.query(
    `
        SELECT
            category.category_name,
            dishes.dish_name,
            orders.order_id,
            orders.order_date,
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
            orders.order_date BETWEEN '${start}' and '${end}'
        GROUP BY
            orders.dish_id
    `,
    { type: db.sequelize.QueryTypes.SELECT }
  );

  pdf
    .create(pdfTemplate(result, start, end, category_name), {})
    .toFile(`${__dirname}/result.pdf`, (err) => {
      if (err) {
        res.send(err);
      }

      // console.log(__dirname + '/result.pdf')
      res.sendFile(`${__dirname}/result.pdf`);
    });
};
const getUserOrder = async (req, res) => {
  const payment_id = req.params["payment_id"];
  try {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    const allCartItems = await db.sequelize.query(
      `
            SELECT
                dishes.dish_image,
                dishes.dish_name,
                orders.order_price,
                ordersmaster.ordermaster_id,
                ordersmaster.total_price
            FROM
                orders
            INNER JOIN dishes ON dishes.dish_id = orders.dish_id AND orders.order_date = '${formattedDate}'
            INNER JOIN ordersmaster ON orders.ordermaster_id= ordersmaster.ordermaster_id AND ordersmaster.ordermaster_id = '${payment_id}'
    `,
      { type: db.sequelize.QueryTypes.SELECT }
    );
    console.log(allCartItems);
    res.status(200).send(allCartItems);
  } catch (err) {
    res.status(400).send();
  }
};

module.exports = {
  addOrder,
  getAllOrder,
  getSpecificDatesOrder,
  getUserOrder,
};
