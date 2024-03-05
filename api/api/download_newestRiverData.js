// 讀取download_environmentAllRPI.json，以產生環境水體河川汙染狀態的下載資訊
var express = require('express');
var router = express.Router();

// 下載環境水體河川汙染狀態
router.post('/', (req, res) => {
    var params = req.body;
    var responseData = []
    var data = require(`${global.URL}download_environmentAllRPI.json`);
    data = data.forEach(item => {
        item.forEach(detail => {
            if (detail.item2.indexOf(params.river) !== -1 && detail.item1.indexOf(params.year) !== -1) {
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