// 讀取groundWater_newData.json，以更新地下水行政區監測站的最新檢測資料的資訊
var express = require('express');
var router = express.Router();

// 查詢地下水行政區監測站的最新檢測資訊
router.post('/', (req, res) => {
    var params = req.body;
    var newestData = []
    var data = require(`${global.URL}groundWater_newData.json`);
    if (params.dis !== undefined) {
        data.forEach(item => {
            if (item[0].disName === params.dis) {
                newestData.push(...item)
            }
        })
    } else {
        data.forEach(item => {
            if (item[0].name === params.sitename) {
                newestData.push(...item)
            }
        })
    }
    console.log(newestData)
    res.send({
        newestData
    })
});
module.exports = router;