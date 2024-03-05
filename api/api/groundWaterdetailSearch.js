// 讀取groundWater_detailSearch.json，以更新地下水監測站進階查詢監測資料的資訊
var express = require('express');
var router = express.Router();

// 進階查詢地下水監測站監測資訊
router.post('/', (req, res) => {
    var params = req.body;
    var searchData = []
    var data = require(`${global.URL}groundWater_detailSearch.json`);
    data.forEach(item => {
        if (item[1].siteName === params.station && item[0] === params.year) {
            searchData.push(...item)
        }
    })
    console.log(searchData)
    res.send({
        searchData
    })
});
module.exports = router;