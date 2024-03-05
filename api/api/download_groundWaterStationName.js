// 讀取download_groundWaterStation.json，以產生地下水監測站的下載資訊
var express = require('express');
var router = express.Router();

// 下載地下水監測站資訊
router.post('/', (req, res) => {
    var responseData = require(`${global.URL}download_groundWaterStation.json`);
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;