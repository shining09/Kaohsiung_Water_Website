// 讀取download_environmentStation.json，以產生環境水體監測站的下載資訊
var express = require('express');
var router = express.Router();

// 下載環境水體監測站資訊
router.post('/', async (req, res) => {
    var responseData = require(`${global.URL}download_environmentStation.json`);
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;