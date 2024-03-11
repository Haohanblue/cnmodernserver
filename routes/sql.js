let express=require("express")
let router=express.Router()
const sqlData=require("../mysql/sql1")


router.get("/data",(req,res)=>{
    // console.log(sqlData.result);
        // res.send([{chartData:sqlData.result},{chartData2:sqlData.result97},{chartData3:sqlData.result98},{chartData4:sqlData.result99}])
        res.send(sqlData.resultsArray)
})
module.exports=router;
