const db = require("../models");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");

// model
const Admin = db.admin;

// functions

// const createToken = (admin_email) => {
//   const jwtToken = jwt.sign({ token: admin_email }, process.env.SECRET_KEY);
//   return jwtToken;
// };

var createToken = (userWithEmail) => {
  var token = jwt.sign(
    {
      admin_email: userWithEmail.admin_email,
      admin_id: userWithEmail.admin_id,
    },
    process.env.SECRET_KEY
  );

  return token;
};

const adminLogin = async (req, res) => {
  try {
    const { admin_email, admin_password } = req.body;
    console.log(admin_email);
    const userWithEmail = await Admin.findOne({
      where: {
        admin_email: admin_email,
      },
    }).catch((err) => {
      console.log("Error :", err);
    });

    if (!userWithEmail) {
      return res.status(400).json({
        message: "Email or Password is Not Valid",
      });
    }

    if (userWithEmail.admin_password !== admin_password) {
      return res.status(400).json({
        message: "Email or Password is Not Valid",
      });
    }

    var tokenValue = createToken(userWithEmail);
    res.cookie("Token", tokenValue, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    res.status(200).send({
      userWithEmail,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("invalid login details");
  }
};

const checkAdminLogin = async (req, res) => {
  const { admin_id } = req.body;
  console.log("00000000000000000000000000000000====>", admin_id);
  // let admin_details = await Admin.findOne({
  //   where: { admin_id: admin_id },
  // });

  try {
    const verify = jwt.verify(req.cookies.Token, process.env.SECRET_KEY);
    console.log("VVEERRIIFFIIEEFFFFFFFDDDDD");
    res.status(200).send({ message: "Successfully Login" });
  } catch (errr) {
    res.send("Not Verified");
  }
};

module.exports = {
  adminLogin,
  checkAdminLogin,
};
