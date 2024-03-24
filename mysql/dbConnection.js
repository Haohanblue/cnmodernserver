let mysql = require("mysql");

let dbConfig = {
    host: "haohan.site",
    user: "cnmodern",
    password: "Haohanblue233",
    database: "cnmodern"
};

let connection;

function handleConnect() {
    connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) {
            console.error("连接失败" + err.stack);
            setTimeout(handleConnect, 2000);
            return;
        }
        console.log("连接成功");
    });

    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnect();
        } else {
            throw err;
        }
    });
}

handleConnect();

module.exports = connection;