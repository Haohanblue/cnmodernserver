let connection = require("./dbConnection");

let filledData = {
    queryScoresByYear: function(table_name, years = [], provinces) {
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
                if (table_name === 'score_data'){
                    query = `SELECT province,year,score,A,B,C,D,E FROM ${table_name} `
                }
                const handleQuery = () => {
                    connection.query(query, params, (err, results) => {
                        if (err) {
                            if (err.fatal) {
                                console.error('数据库连接失败，正在尝试重新连接...');
                                connection = require("./dbConnection");
                                handleQuery();
                            } else {
                                console.error("查询失败" + err.message);
                                reject(err);
                                return;
                            }
                        } else {
                            const parsedResults = JSON.parse(JSON.stringify(results));
                            resolve({ year: year.toString(), chartData: parsedResults });
                        }
                    });
                };
                handleQuery();
            });
        });

        return Promise.all(promises);
    }
};
module.exports = filledData;