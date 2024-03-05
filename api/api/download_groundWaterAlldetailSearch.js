// 讀取download_groundWaterAlldetailSearch.json，以產生地下水原始監測資料的下載資訊
var express = require('express');
var router = express.Router();

// 下載地下水原始監測資訊
router.post('/', (req, res) => {
    var params = req.body;
    console.log(params)
    var responseData = []
    var data = require(`${global.URL}download_groundWaterAlldetailSearch.json`);
    data = data.forEach(item => {
        item.forEach(detail => {
            if (detail.Township.indexOf(params.dis) !== -1 && detail.SampleDate.indexOf(params.year) !== -1) {
                responseData.push(detail)
            }
        })
    })
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;