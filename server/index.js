let express = require("express");
// let mysql = require("mysql");//

let bodyParser = require("body-parser");

let app = express();

let api = require("./api/api");
app.use(bodyParser.json());
app.use(express.static(__dirname+"/"));//访问静态资源必须配置一下

app.all("*", function (req, res, next) {
    //cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Token");
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//建立连接池
// let pool = mysql.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: "finger_shop"
// });

api(app);

app.listen("3000", function () {
    console.log("server start at port 3000");
});