// 讀取environment_station.json，以更新環境水體監測站的資訊
var express = require('express');
var router = express.Router();

// 查詢環境水體監測站資訊
router.post('/', (req, res) => {
    var params = req.body;
    var siteData = []
    var data = require(`${global.URL}environment_station.json`);
    data.forEach(item => {
        if (item[0].river === params.river) {
            siteData.push(...item)
        }
    })
    res.send({
        siteData
    })
});
module.exports = router;