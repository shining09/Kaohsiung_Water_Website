// 讀取download_waterpoolAlldetailSearch.json，以產生水庫監測站原始監測資料的下載資訊
var express = require('express');
var router = express.Router();

// 下載水庫監測站原始監測資訊
router.post('/', (req, res) => {
    var params = req.body;
    var responseData = []
    var data = require(`${global.URL}download_waterpoolAlldetailSearch.json`);
    data = data.forEach(item => {
        if (item[0].DamName.indexOf(params.damName) !== -1 && item[0].SampleDate.indexOf(params.year) !== -1) {
            responseData.push(item)
        }
    })
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;