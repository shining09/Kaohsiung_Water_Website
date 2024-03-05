// 讀取groundWater_station.json，以更新地下水各行政區監測站的資訊
var express = require('express');
var router = express.Router();

// 查詢地下水各行政區監測站資訊
router.post('/', (req, res) => {
    var params = req.body;
    var siteData = require(`${global.URL}groundWater_station.json`);
    siteData = siteData[0]
    res.send({
        siteData
    })
});
module.exports = router;