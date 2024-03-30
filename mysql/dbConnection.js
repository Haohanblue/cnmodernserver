let mysql = require("mysql");
const DBHOST = require('../config/config.json').DBHOST
const DBUSER = require('../config/config.json').DBUSER
const DBPASSWORD = require('../config/config.json').DBPASSWORD
const DBDATABASE = require('../config/config.json').DBDATABASE
let dbConfig = {
    host: DBHOST,
    user: DBUSER,
    password: DBPASSWORD,
    database: DBDATABASE
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