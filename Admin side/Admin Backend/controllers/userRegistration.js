const db = require('../models');
const jwt = require("jsonwebtoken");
// model
// var LocalStorage = require('node-localstorage').LocalStorage,localStorage = new LocalStorage('./scratch');

const User = db.user;

// functions

//1. Add user

const addUser = async (req, res) => {
    const isPresent = await checkUser(req.body.user_email);

    if (isPresent == false) {

        try {
            let data = {
                user_name: req.body.user_name,
                user_password: req.body.user_password,
                user_email: req.body.user_email,
                user_mobile: req.body.user_mobile,

            };
            data['token'] = createToken(data.user_email);

            res.cookie("tokenVal", data.token, {
                expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
                httpOnly: true,
            });

            const addUser = await User.create(data);
            console.log(addUser);
            res.status(200).send(addUser);

        } catch (err) {
            res.status(404).send(err);
        }

    } else {
        console.log("already exist");
        res.status(404).send("Already exist data");
    }
};

const checkUserLogin = async (req, res) => {
    console.log("callledddd 1111");
    const { user_id } = req.body.userid;
    // console.log("---------------------------", req.body, "---------------------------");
    let useVal = await User.findOne({
        where: { user_id: user_id }
        ,
        attributes: ['token']
    }
    );
    if (!jwt.verify(req.cookies.tokenVal, process.env.SECRET_KEY)) {
        console.log("---------------------------", "Hemllooo", "---------------------------");
        console.log("hemllllo");
        res.status(400).send("Login again");
    } else {
        res.status(200).send(
            { message: "Successfully Login" }
        );
    }
    console.log("callledddd 222222");
};

const createToken = (user_email) => {
    const jwtToken = jwt.sign({ token: user_email }, process.env.SECRET_KEY);
    return jwtToken;
};
const checkUser = async (user_email) => {
    console.log("-----------------------", user_email, "-----------------------");
    let useVal = await User.findOne({ where: { user_email: user_email } });
    console.log(useVal);
    if (useVal) {
        return true;
    } else {
        console.log("inside false");
        return false;
    }
};
const userLogin = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;
        const userWithEmail = await User.findOne({
            where: {
                user_email: user_email
            }
        }).catch((err) => {
            console.log("Error :", err);
        });

        if (!userWithEmail) {
            return res.status(400).json({
                message: "Email or Password is Not Valid"
            });
        }

        if (userWithEmail.user_password !== user_password) {
            return res.status(400).json({
                message: "Email or Password is Not Valid"
            });
        }

        var tokenValue = createToken(userWithEmail.user_email);
        res.cookie("tokenVal", tokenValue, { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) });

        res.status(200).send({
            userWithEmail
        });
    } catch (error) {
        console.log(error);
        res.status(400).send("invalid login details");
    }
};

module.exports = {
    addUser,
    userLogin,
    checkUserLogin
};