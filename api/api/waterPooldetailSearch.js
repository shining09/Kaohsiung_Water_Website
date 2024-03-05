// 讀取waterpool_detailSearch.json，以更新水庫測站進階查詢卡爾森指數變化的資訊
var express = require('express');
var router = express.Router();

// 進階查詢水庫測站卡爾森指數變化
router.post('/', (req, res) => {
    var params = req.body;
    console.log(params);
    var dataArray = []
    var data = require(`${global.URL}waterpool_detailSearch.json`);
    data = data.forEach(item => {
        if (item[0] === params.year && item[1].name.indexOf(params.damName) !== -1) {
            dataArray.push(item)
        }
    })
    res.send({
        dataArray
    })
});
module.exports = router;