// 讀取groundWater_detailSearch.json，以產生地下水監測站檢測資料的下載資訊
var express = require('express');
var router = express.Router();

// 下載地下水監測站檢測資訊
router.post('/', (req, res) => {
    var params = req.body;
    console.log(params.year)
    console.log(params.dis)
    var responseData = []
    let data = ''
    data = require(`${global.URL}groundWater_detailSearch.json`);
    data = data.forEach(item => {
        if (item[0] == params.year && item[1].dis.indexOf(params.dis) !== -1) {
            let keyItem = JSON.parse(JSON.stringify(item))
            keyItem.splice(0, 1)
            for (let i = 0; i < keyItem.length; i++) {
                keyItem[i].year = item[0]
            }
            responseData.push(...keyItem)
        }
    })
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;