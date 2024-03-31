let mysql = require("mysql");
const fs = require('fs');
// 读取JSON文件
let rawdata = fs.readFileSync('./config/config.json');
let config = JSON.parse(rawdata);
// 本地调试
if (config.ISLOCAL) {
    config.DBHOST = 'cnmodern.site';
} else {
    config.DBHOST = 'localhost';
}
let dbConfig = {
    host: config.DBHOST,
    user: config.DBUSER,
    password: config.DBPASSWORD,
    database: config.DBDATABASE,
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