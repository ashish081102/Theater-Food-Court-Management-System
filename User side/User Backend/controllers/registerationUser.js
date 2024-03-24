const db = require('../models')
const jwt = require("jsonwebtoken");
// model
const Users = db.user

// functions

//1. Add Category

const addUser = async (req, res) => {

    try {
        let data = {
            user_name: req.body.user_name,
            user_password: req.body.user_password,
            user_email: req.body.user_email,
            user_mobile: req.body.user_mobile,
        }
        data['token'] = createToken(data.user_email);
        const addUser = await Users.create(data)
        res.status(200).send(addUser)

    } catch (err) {
        res.status(404).send("Invalid Url")
    }

}

const createToken = async (user_email) => {
    const jwtToken = jwt.sign({ token: user_email }, process.env.SECRET_KEY);
    return jwtToken
}

module.exports = {
    addUser
}