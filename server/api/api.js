// let jwt = require("jsonwebtoken");
let url = require("url");
let fs = require("fs");
// const _ = require("lodash");//工具库----处理数据的
// let multer = require("multer");//解析req里面的二进制流，解析成源文件进行储存

//用户列表
let user = [{
    user: "15303837077",
    pwd: "123456"
}]

function api(app) {
    app.post("/back/login", function (req, res) {
        console.log(req.body);

    });

    // app.post("/back/upload", uploader.single("imgs"), function (req, res) {
    //     // console.log("---",req.file);
    //     return res.json({
    //         code: 0,
    //         msg: "Success111123",
    //         file: req.file,
    //         url: url.resolve('http://localhost:3000/', req.file.path),
    //         src: req.file.originalname
    //     });
    // });
    // app.post("/back/setup_shop", function (req, res) {
    //     let userInfo = verifyToken(req.headers.token);

    //     let shopDB = JSON.parse(fs.readFileSync(process.cwd() + "/database/shop.json", "utf-8"));
    //     let data = {
    //         id: userInfo.user,
    //         ...req.body
    //     }
    //     let ind = _.findIndex(shopDB, { id: userInfo.user });
    //     if (ind > -1) {
    //         shopDB[ind] = data;
    //     } else {
    //         shopDB.push(data);
    //     }
    //     console.log("---", userInfo);
    //     let isDone = fs.writeFileSync(process.cwd() + "/database/shop.json", JSON.stringify(shopDB));

    //     return res.json({
    //         code: 0,
    //         msg: "Success---setup设置"
    //     });
    // });
    // function addDB() {

    // }
    // function queryDB(name, id) {
    //     let data = JSON.parse(fs.readFileSync(process.cwd() + "/database/" + name + ".json", "utf-8"));
    //     let item = data.filter(item => {
    //         return item.id == id
    //     });
    //     return item[0];
    // }
    // function verifyToken(token) {
    //     // console.log(jwt)
    //     return jwt.verify(token, "1602A");
    // }
    // app.get("/back/get_shop", function (req, res) {
    //     let userInfo = verifyToken(req.headers.token);
    //     console.log(userInfo)
    //     console.log(queryDB("shop", userInfo.user))
    //     return res.json({
    //         code: 0,
    //         msg: "Success---get设置",
    //         data: queryDB("shop", userInfo.user)
    //     });
    // });
}

module.exports = api;
