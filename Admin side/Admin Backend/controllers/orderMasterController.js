const db = require("../models");

// model
const OrderMaster = db.orderMaster;

// functions

//1. Add Order

const addOrderMaster = async (req, res) => {
  let data = {
    user_id: req.body.user_id,
    order_date: req.body.order_date,
    total_price: req.body.total_price,
    payment_type: req.body.payment_type,
    payment_status: req.body.payment_status,
  };

  const Order = await OrderMaster.create(data);
  res.status(200).send(Order);
};

//2. Get OrderMaster Details

const getOrderMaster = async (req, res) => {
  try {
    const result = await db.sequelize.query(
      `
              SELECT
                  *
              FROM
                  ordersmaster
              INNER JOIN 
                  users ON ordersmaster.user_id = users.user_id
          `,
      { type: db.sequelize.QueryTypes.SELECT }
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  addOrderMaster,
  getOrderMaster,
};
