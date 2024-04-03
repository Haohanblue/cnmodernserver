let mysql = require("mysql");
const fs = require('fs');
// 读取JSON文件
let rawdata = fs.readFileSync('./config/config.json');
let config = JSON.parse(rawdata);
// 本地调试
if (config.ISLOCAL == 0) {
    config.DBHOST = 'cnmodern.site';
} else if(config.ISLOCAL == 1){
    config.DBHOST = 'localhost';
}else{
    config.DBHOST = 'bj-cynosdbmysql-grp-3upmvv08.sql.tencentcdb.com';
}
let dbConfig = {
    host: config.DBHOST,
    user: config.DBUSER,
    password: config.DBPASSWORD,
    database: config.DBDATABASE,
    port: config.DBPORT,
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