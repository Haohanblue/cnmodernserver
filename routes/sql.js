let express=require("express")
let router=express.Router()
const handleDataRequest = require('../mysql/handleRequest');

router.get("/data/main/:year?/:provinces?", (req, res) => {
    handleDataRequest("scores_data", req, res);
});
router.get("/data/area/:year?/:provinces?", (req, res) => {
    handleDataRequest("area_data", req, res);
});
router.get("/data/filled/:year?/:provinces?", (req, res) => {
    handleDataRequest("filled_data", req, res);
});
router.get("/data/source/:year?/:provinces?", (req, res) => {
    handleDataRequest("source_data", req, res);
});

module.exports=router;
