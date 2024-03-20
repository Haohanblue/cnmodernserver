let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "haohan.site",
    user: "cnmodern",
    password: "Haohanblue233",
    database: "cnmodern"
});
connection.connect((err) => {
    if (err) {
        console.error("连接失败" + err.back);
        return;
    }
    console.log("连接成功");
});

// 定义一个函数来查询成绩
function queryScoresByYear(year) {
    return new Promise((resolve, reject) => {
        connection.query("select * from area_data where year=?", [year], (err, results) => {
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
}

// 生成年份数组
const years = [];
for (let year = 2000; year <= 2023; year++) {
    years.push(year);
}

// 查询每个年份的数据并构建结果数组
Promise.all(years.map(year => queryScoresByYear(year)))
    .then(results => {
        // 导出结果数组
        module.exports.resultsArray = results;
    })
    .catch(err => {
        console.error("查询失败: " + err.message);
    });

