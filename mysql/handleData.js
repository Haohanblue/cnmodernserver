let connection = require("./dbConnection");
function handleDataQuery(dataType, req, res) {
    const year = req.query.year;
    const province = req.query.province;

    // 构建基础SQL查询语句
    let sql = `SELECT * FROM ${dataType}`;

    // 根据参数存在与否添加条件
    let conditions = [];
    let params = [];
    if (year) {
        conditions.push('year = ?');
        params.push(year);
    }
    if (province) {
        conditions.push('province = ?');
        params.push(province);
    }

    // 如果有条件，将它们添加到查询语句中
    if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
    }
    // 执行SQL查询
    connection.query(sql, params, (error, results) => {
        if (error) {
            res.status(500).send('Server Error');
            return;
        }
            // 发送xlsx文件
            res.send(results);
        });
}
module.exports = handleDataQuery;