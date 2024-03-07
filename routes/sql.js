let express=require("express")
let router=express.Router()
const sqlData=require("../mysql/sql1")


router.get("/data",(req,res)=>{
    // console.log(sqlData.result);
        // res.send([{chartData:sqlData.result},{chartData2:sqlData.result97},{chartData3:sqlData.result98},{chartData4:sqlData.result99}])
        res.send([
        {year:"2000",chartData:sqlData.result2000},{year:"2001",chartData:sqlData.result2001},{year:"2002",chartData:sqlData.result2002},
        {year:"2003",chartData:sqlData.result2003},{year:"2004",chartData:sqlData.result2004},{year:"2005",chartData:sqlData.result2005},
        {year:"2006",chartData:sqlData.result2006},{year:"2007",chartData:sqlData.result2007},{year:"2008",chartData:sqlData.result2008},
        {year:"2009",chartData:sqlData.result2009},{year:"2010",chartData:sqlData.result2010},{year:"2011",chartData:sqlData.result2011},
        {year:"2012",chartData:sqlData.result2012},{year:"2013",chartData:sqlData.result2013},{year:"2014",chartData:sqlData.result2014},
        {year:"2015",chartData:sqlData.result2015},{year:"2016",chartData:sqlData.result2016},{year:"2017",chartData:sqlData.result2017},
        {year:"2018",chartData:sqlData.result2018},{year:"2019",chartData:sqlData.result2019},{year:"2020",chartData:sqlData.result2020},
        {year:"2021",chartData:sqlData.result2021},{year:"2022",chartData:sqlData.result2022},{year:"2023",chartData:sqlData.result2023}
    ])
})

module.exports=router;
