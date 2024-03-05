// 讀取download_waterpoolStation.json，以產生水庫監測站的下載資訊
var express = require('express');
var router = express.Router();

// 下載水庫監測站資訊
router.post('/', (req, res) => {
    var responseData = require(`${global.URL}download_waterpoolStation.json`);
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;