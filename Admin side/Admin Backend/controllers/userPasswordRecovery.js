const db = require("../models");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = db.user; 

//1. Foprgot Passowrd

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    console.log(req.body);

    const userWithEmail = await User.findOne({
      where: {
        user_email: email,
      },
    }).catch((err) => {
      console.log("Error :", err);
    });
    if (!userWithEmail) {
      return res.status(400).json({
        message: "Email or Password is Not Valid",
      });
    }

    var tokenValue = jwt.sign(
      { email: userWithEmail.user_email, id: userWithEmail.user_id },
      userWithEmail.user_password,
      {
        expiresIn: "5m",
      }
    );

    const link = `http://localhost:8080/api/admin/reset-password/${userWithEmail.user_id}/${tokenValue}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sumitdubey9974@gmail.com",
        pass: "mdooppdgqgsuolvu",
      },
    });

    var mailOptions = {
      from: "Sumit Dubey <passwords.mailer.com>",
      to: "sumitdubey9974@gmail.com",
      subject: "Password Recovery Email",
      html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            color: #555;
        }
        .button {
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
            color:#fff
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Password Reset</h1>
        <p>Hello,</p>
        <p>You are receiving this email because a password reset request was made for your account. If you did not request this, please ignore this email.</p>
        <p>To reset your password, click the button below:</p>
        <a href="${link}" class="button">Reset Password</a>
        <p>If the button above does not work, you can also copy and paste the following link into your browser:</p>
        <p>${link}</p>
        <p>If you have any questions, please contact us at support@yourwebsite.com.</p>
        <p>Best regards,<br>Your Website Team</p>
    </div>
</body>
</html>

      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.json({ link });
    console.log(link);
  } catch (err) {
    res.status(404).send(err);
  }
};

const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);

  const userWithEmail = await User.findOne({
    where: {
      user_id: id,
    },
  }).catch((err) => {
    console.log("Error :", err);
  });
  if (!userWithEmail) {
    return res.status(400).json({
      message: "Email or Password is Not Valid",
    });
  }

  try {
    const verify = jwt.verify(token, userWithEmail.user_password);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (errr) {
    res.send("Not Verified");
  }
};
const resetPasswordPost = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  // console.log(req.params);
  const userWithEmail = await User.findOne({
    where: {
      user_id: id,
    },
  }).catch((err) => {
    console.log("Error :", err);
  });

  if (!userWithEmail) {
    return res.status(400).json({
      message: "Email or Password is Not Valid",
    });
  }

  try {
    const verify = jwt.verify(token, userWithEmail.user_password);

    const user = await User.update(
      { user_password: password },
      { where: { user_id: id } }
    );

    // res.json(user);
    res.end(`
    <h1>"Password Has Been Updated! You can Close This Window Now!"</h1> 
    `);
  } catch (errr) {
    res.json({ status: "Something Wen Wrong!" });
  }
};

module.exports = {
  forgotPassword,
  resetPassword,
  resetPasswordPost,
};
