const query=require("./queryData")
function handleDataRequest(table_name, req, res) {
    let years = [];
    let provinces = 'all';
    // 检查 req.params.year 是否是一个有效的年份
    if (req.params.year && !isNaN(req.params.year) && req.params.year >= 2000 && req.params.year <= 2023) {
        years = [req.params.year];
    } else if (req.params.year) {
        // 如果 req.params.year 不是一个有效的年份，假设它是一个省份
        provinces = req.params.year;
        years = Array.from({length: 24}, (_, i) => (2000 + i).toString());
    } else {
        years = Array.from({length: 24}, (_, i) => (2000 + i).toString());
    }
    // 如果 req.params.provinces 是一个有效的省份，使用它
    if (req.params.provinces) {
        provinces = req.params.provinces;
    }
    query.queryScoresByYear(table_name, years, provinces)
    .then(data => res.send(data))
    .catch(err => console.error(err));
}
module.exports = handleDataRequest;