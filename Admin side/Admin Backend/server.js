
const express = require('express');
const cors = require('cors');

require("dotenv").config();

const app = express();

const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));



app.use(express.json());

// app.use(express.json());


app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/adminRoutes");
app.use("/api/admin", router);

//static Images Folder


const path = require('path');
app.use('/Images', express.static('./Images'));
// app.use('Images', express.static(path.join(__dirname, '/Images')))
// console.log(__dirname + "./Images");
// app.use('/local-files', express.static('/'));

// app.use('/Images', express.static('./Images'))
// app.use('/local-files', express.static('/'));

// app.use("/Images", express.static("./Images"));


//port

const PORT = process.env.PORT;
//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
