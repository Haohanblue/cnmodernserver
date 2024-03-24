let express=require("express")
let router=express.Router()
const handleDataRequest = require('../mysql/handleRequest');
const handleDownloadRequest = require('../mysql/download');
const handleIndexRequest = require('../mysql/handleIndex');
const handleDataQuery = require('../mysql/handleData');
router.get("/data/main/:year?/:provinces?", (req, res) => {
    handleDataRequest("scores_data", req, res);
});
router.get("/data/area/:year?/:provinces?", (req, res) => {
    handleDataRequest("area_data", req, res);
});
router.get("/data/filled/", (req, res) => {
    handleDataQuery("filled_data", req, res);
});
router.get("/data/source/", (req, res) => {
    handleDataQuery("source_data", req, res);
});

router.get("/data/index/:code?", (req, res) => {
    handleIndexRequest("index_data", req, res);
});
router.get("/download/source", (req, res) => {
    handleDownloadRequest("source_data", req, res);
});

router.get("/download/filled", (req, res) => {
    handleDownloadRequest("filled_data", req, res);
});
router.get("/download/index", (req, res) => {
    handleDownloadRequest("index_data", req, res);
});

module.exports=router;
