const db = require('../models')

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");

// model
const Admin = db.admin

// functions


const adminLogin = async (req, res) => {
    try {
        const { admin_email, admin_password } = req.body;
        console.log(admin_email);
        const userWithEmail = await Admin.findOne({
            where: {
                admin_email: admin_email
            }
        }).catch((err) => {
            console.log("Error :", err);
        });

        if (!userWithEmail) {
            return res.status(400).json({
                message: "Email or Password is Not Valid"
            });
        }

        if (userWithEmail.admin_password !== admin_password) {
            return res.status(400).json({
                message: "Email or Password is Not Valid"
            });
        }

        res.cookie("Token", userWithEmail.admin_email, {
            expires: new Date(Date.now() + 8.64e+7),
            httpOnly: true,
        })

        res.status(200).json({

            message: "Welcome Back",
            // username: req.session.username
        });
    } catch (error) {
        console.log(error);
        res.status(400).send("invalid login details");
    }
}

const checkUser = async (req, res) => {
    console.log(req.cookies.Token);
    if (req.cookies.Token == process.env.SECRET_KEY) {
        return res.status(200).json({ valid: true })
    } else {
        return res.status(404).json({ valid: false })
    }

}

module.exports = {
    adminLogin,
    checkUser
}