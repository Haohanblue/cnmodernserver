const mysql = require('mysql');
const ExcelJS = require('exceljs');
let connection = require("./dbConnection");
function handleDownloadRequest(dataType, req, res) {
    const year = req.query.year;
    const province = req.query.province;
    const additionalColumns = req.query.columns ? req.query.columns.split(',') : ['*'];

    // 默认查询的列
    let defaultColumns = ['year', 'province'];
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

    let conditions = [];
    let params = [];
    if (year) {
        let years = year.split(',');
        conditions.push(`year IN (${Array(years.length).fill('?').join(',')})`);
        params.push(...years);
    }
    if (province) {
        let provinces = province.split(',');
        conditions.push(`province IN (${Array(provinces.length).fill('?').join(',')})`);
        params.push(...provinces);
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
        // 创建新的Excel工作簿
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Data');

        // 将查询结果写入Excel工作簿
        worksheet.columns = fields.map(field => ({ header: field.name, key: field.name }));
        results.forEach(row => worksheet.addRow(row));
        let codes = req.query.columns;
        codes = codes.split(',');
        let query_2;

            if (codes) {
            query_2 = "SELECT * FROM index_data WHERE code IN (?)";
            } else {
            query_2 = "SELECT * FROM index_data";
            }
        connection.query(query_2,[codes],(error,results,fields)=>{
            if(error) throw error;
            let worksheet2 = workbook.addWorksheet('dict');
            worksheet2.columns = fields.map(field => ({ header: field.name, key: field.name }));
            results.forEach(row => worksheet2.addRow(row));
                    // 将Excel工作簿转换为Buffer
            workbook.xlsx.writeBuffer().then(buffer => {
            // 设置响应头以发送xlsx文件
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=${dataType}.xlsx`);

            // 发送xlsx文件
            res.send(buffer);
        });
        })

    });
}
module.exports = handleDownloadRequest;