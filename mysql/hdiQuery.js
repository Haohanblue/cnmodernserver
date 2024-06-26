let connection = require("./dbConnection");
function handleDataQuery(dataType, req, res) {
    const year = req.query.year;
    const additionalColumns = req.query.columns ? req.query.columns.split(',') : ['*'];
    // 默认查询的列
    let defaultColumns = ['year'];
    let columns;
    // 如果additionalColumns是*，则替换defaultColumns
    if (additionalColumns.length === 1 && additionalColumns[0] === '*') {
         columns = ['*'];
    }else{
        // 合并默认列和其他列
         columns = [...defaultColumns, ...additionalColumns];
    }
    // 构建基础SQL查询语句
    let sql = `SELECT ${columns.join(',')} FROM ${dataType}`;

    // 根据参数存在与否添加条件
    let conditions = [];
    let params = [];
    if (year) {
        let years = year.split(',');
        conditions.push(`year IN (${Array(years.length).fill('?').join(',')})`);
        params.push(...years);
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

            res.send(results);
        });
}
module.exports = handleDataQuery;