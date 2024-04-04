const db = require('../models')

const { Op } = require("sequelize");

// model
const Ticket = db.ticket

const checkUserTicket = async (req, res) => {
    try {
        const { user_email, user_seat, user_screen } = req.body;
        const userticket = await Ticket.findOne({ where: { user_email } })
        console.log(user_email)
        res.status(200).send(userticket)
    } catch (err) {
        res.status(400).send(err);
    }
}
module.exports = {
    checkUserTicket
}