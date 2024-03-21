let mysql = require("mysql");

let dbConfig = {
    host: "haohan.site",
    user: "cnmodern",
    password: "Haohanblue233",
    database: "cnmodern"
};

let connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error("连接失败" + err.stack);
        return;
    }
    console.log("连接成功");
});

module.exports = connection;