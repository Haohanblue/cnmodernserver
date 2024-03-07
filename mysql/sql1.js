let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "space.haohan.site",
    user: "cnmodern",
    password: "Haohanblue123",
    database: "cnmodern"
});
connection.connect((err) => {
    if (err) {
        console.error("连接失败" + err.back);
        return;
    }
    console.log("连接成功");
});


connection.query("select * from scores where year=2000", (err, result2000) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2000 = JSON.stringify(result2000);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2000 = JSON.parse(result2000);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2000 = result2000
});
connection.query("select * from scores where year=2001", (err, result2001) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2001 = JSON.stringify(result2001);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2001 = JSON.parse(result2001);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2001 = result2001
});
connection.query("select * from scores where year=2002", (err, result2002) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2002 = JSON.stringify(result2002);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2002 = JSON.parse(result2002);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2002 = result2002
});
connection.query("select * from scores where year=2003", (err, result2003) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2003 = JSON.stringify(result2003);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2003 = JSON.parse(result2003);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2003 = result2003
});
connection.query("select * from scores where year=2004", (err, result2004) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2004 = JSON.stringify(result2004);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2004 = JSON.parse(result2004);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2004 = result2004
});
connection.query("select * from scores where year=2005", (err, result2005) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2005 = JSON.stringify(result2005);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2005 = JSON.parse(result2005);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2005 = result2005
});
connection.query("select * from scores where year=2006", (err, result2006) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2006 = JSON.stringify(result2006);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2006 = JSON.parse(result2006);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2006 = result2006
});
connection.query("select * from scores where year=2007", (err, result2007) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2007 = JSON.stringify(result2007);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2007 = JSON.parse(result2007);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2007 = result2007
});
connection.query("select * from scores where year=2008", (err, result2008) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2008 = JSON.stringify(result2008);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2008 = JSON.parse(result2008);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2008 = result2008
});
connection.query("select * from scores where year=2009", (err, result2009) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2009 = JSON.stringify(result2009);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2009 = JSON.parse(result2009);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2009 = result2009
});
connection.query("select * from scores where year=2010", (err, result2010) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2010 = JSON.stringify(result2010);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2010 = JSON.parse(result2010);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2010 = result2010
});
connection.query("select * from scores where year=2011", (err, result2011) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2011 = JSON.stringify(result2011);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2011 = JSON.parse(result2011);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2011 = result2011
});
connection.query("select * from scores where year=2012", (err, result2012) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2012 = JSON.stringify(result2012);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2012 = JSON.parse(result2012);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2012 = result2012
});
connection.query("select * from scores where year=2013", (err, result2013) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2013 = JSON.stringify(result2013);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2013 = JSON.parse(result2013);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2013 = result2013
});
connection.query("select * from scores where year=2014", (err, result2014) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2014 = JSON.stringify(result2014);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2014 = JSON.parse(result2014);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2014 = result2014
});
connection.query("select * from scores where year=2015", (err, result2015) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2015 = JSON.stringify(result2015);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2015 = JSON.parse(result2015);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2015 = result2015
});
connection.query("select * from scores where year=2016", (err, result2016) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2016 = JSON.stringify(result2016);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2016 = JSON.parse(result2016);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2016 = result2016
});
connection.query("select * from scores where year=2017", (err, result2017) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2017 = JSON.stringify(result2017);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2017 = JSON.parse(result2017);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2017 = result2017
});
connection.query("select * from scores where year=2018", (err, result2018) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2018 = JSON.stringify(result2018);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2018 = JSON.parse(result2018);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2018 = result2018
});
connection.query("select * from scores where year=2019", (err, result2019) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2019 = JSON.stringify(result2019);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2019 = JSON.parse(result2019);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2019 = result2019
});
connection.query("select * from scores where year=2020", (err, result2020) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2020 = JSON.stringify(result2020);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2020 = JSON.parse(result2020);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2020 = result2020
});
connection.query("select * from scores where year=2021", (err, result2021) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2021 = JSON.stringify(result2021);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2021 = JSON.parse(result2021);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2021 = result2021
});
connection.query("select * from scores where year=2022", (err, result2022) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2022 = JSON.stringify(result2022);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2022 = JSON.parse(result2022);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2022 = result2022
});
connection.query("select * from scores where year=2023", (err, result2023) => {
    if (err) {
        console.error("查询失败" + err.message);
        return;
    }
    // console.log(result)
    result2023 = JSON.stringify(result2023);//把results对象转为字符串，去掉RowDataPacket
    // console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
    result2023 = JSON.parse(result2023);//把results字符串转为json对象
    // console.log(result);
    module.exports.result2023 = result2023
});


