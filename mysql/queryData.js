let connection = require("./dbConnection");

let filledData = {
    // 定义一个函数来查询数据
    queryScoresByYear: function(table_name,years = [], provinces) {
        // 检查 years 是否是一个数组，如果不是，将其转换为一个数组
        if (!Array.isArray(years)) {
            years = [years];
        }
        let promises = years.map(year => {
            return new Promise((resolve, reject) => {
                let query = `SELECT * FROM ${table_name} WHERE year=?`;
                let params = [year];

                if (provinces !== 'all') {
                    if (table_name === 'area_data'){
                        query += " AND region=?";
                        params.push(provinces);
                    }
                    else{
                        query += " AND province=?";
                        params.push(provinces);
                    }
                }
                connection.query(query, params, (err, results) => {
                    if (err) {
                        console.error("查询失败" + err.message);
                        reject(err); // 调用 reject 函数并传递错误对象
                        return;
                    }
                    // 将结果转换为字符串，然后再解析为 JSON 对象
                    const parsedResults = JSON.parse(JSON.stringify(results));
                    resolve({ year: year.toString(), chartData: parsedResults }); // 调用 resolve 函数并传递结果对象
                });
            });
        });

        return Promise.all(promises);
    }
};

module.exports = filledData;