
const express = require('express')
const cors = require('cors')

require("dotenv").config();
const Razorpay = require('razorpay');
const app = express();

const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: true,
  credentials: true,
}
app.use(cors(corsOptions));



app.use(express.json())

app.use(express.json());


app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/adminRoutes");
app.use("/api/admin", router);

//static Images Folder


const path = require('path')
// e('/local-files', express.static('/'));

app.use("/Images", express.static("./Images"));

// const instance = new Razorpay({
//   key_id: process.env.REZORPAY_API_KEY,
//   key_secret: process.env.REZORPAY_API_SECRET,
// });
// module.exports = { instance }
//port

const PORT = process.env.PORT;
//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
