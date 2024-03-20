let express=require("express")
let router=express.Router()
const scoreAllData=require("../mysql/scoreAllData")
const scoreAreaData=require("../mysql/scoreAreaData")
const filledData=require("../mysql/filledData")
const sourceData=require("../mysql/sourceData")
router.get("/data/main", (req, res) => {
    const results = scoreAllData.resultsArray;
    res.send(results);
});
router.get("/data/area", (req, res) => {
    const results = scoreAreaData.resultsArray;
    res.send(results);
});
router.get("/data/filled", (req, res) => {
    const results = filledData.resultsArray;
    res.send(results);
});
router.get("/data/source", (req, res) => {
    const results = sourceData.resultsArray;
    res.send(results);
});
module.exports=router;
