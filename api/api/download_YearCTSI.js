// 讀取waterpool_detailSearch.json，以產生水庫測站監測資料的下載資訊
var express = require('express');
var router = express.Router();

// 下載水庫測站監測資訊
router.post('/', (req, res) => {
    var params = req.body;
    var responseData = []
    var data = require(`${global.URL}waterpool_detailSearch.json`);
    data = data.forEach(item => {
        if (item[0] === params.year && item[1].name.indexOf(params.damName) !== -1) {
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