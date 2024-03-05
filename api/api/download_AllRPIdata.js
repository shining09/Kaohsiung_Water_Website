// 讀取download_environmentRiverData.json，以產生環境水體河川歷史汙染的下載資訊
var express = require('express');
var router = express.Router();

// 下載環境水體河川汙染歷史資訊
router.post('/', (req, res) => {
    var params = req.body;
    var responseData = []
    var data = require(`${global.URL}download_environmentRiverData.json`);
    data = data.forEach(item => {
        console.log(item[0])
        if (item[0].item2.indexOf(params.river) !== -1) {
            responseData.push(...item)
        }
    })
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;