const express = require("express");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
const morgan = require("morgan");
const route = require("./src/api/route/index");
const connectDB = require("./src/database/connectDB");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
//JSON

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

//set view engine
// app.set('views', path.join(__dirname, '/src/views'))
app.set("views", path.join(__dirname, "/src/view_001"));

app.set("view engine", "ejs");
// console.log('a', a)
const PORT = process.env.PORT || 2000;
//connect DB
connectDB();
//status  request
app.use(morgan("tiny"));
//route
app.use(route());

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server has started on: http://localhost:${PORT}`);
  localStorage.removeItem("userId")
  // console.log(localStorage.removeItem("userId"));
  // console.log(localStorage.getItem("userId"));
});
