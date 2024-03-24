let mysql = require("mysql");

let dbConfig = {
    host: "haohan.site",
    user: "cnmodern",
    password: "Haohanblue233",
    database: "cnmodern"
};

let connection;

function handleConnect() {
    connection = mysql.createPool(dbConfig);
    connection.on('connection', function (connection) {
        console.log('数据连接成功');
    });
    connection.on('error', function (err) {
        console.error('连接失败',err);
    });

}

handleConnect();

module.exports = connection;