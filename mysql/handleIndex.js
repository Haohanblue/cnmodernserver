let connection = require("./dbConnection");
function handleIndexRequest(dataType, req, res) {
    const code = req.params.code;

    // 构建基础SQL查询语句
    let sql = `SELECT * FROM ${dataType}`;

    // 根据参数存在与否添加条件
    let conditions = [];
    let params = [];
    if (code) {
        conditions.push('code = ?');
        params.push(code);
    }

    // 如果有条件，将它们添加到查询语句中
    if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
    }

    // 执行SQL查询
    connection.query(sql, params, (error, results, fields) => {
        if (error) {
            res.status(500).send('Server Error');
            return;
        }

        // 将查询结果发送回客户端
        res.send(results);
    });
}

module.exports = handleIndexRequest;