var express = require("express");
var bodyParser = require("body-parser");
// const multer = require('multer');
var app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
require("./routes")(app); //import routes
var server = app.listen(8081, () => {
  console.log("Server is started on 127.0.0.1:8081");
});
