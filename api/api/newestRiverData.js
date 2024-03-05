// 讀取environment_newData.json，以更新環境水體監測站最新檢測資料的資訊
var express = require('express');
var router = express.Router();

// 查詢環境水體監測站最新檢測資訊
router.post('/', (req, res) => {
    var params = req.body;
    var data = []
    var riverdata = require(`${global.URL}environment_newData.json`);
    console.log(riverdata)
    riverdata.forEach(item => {
        console.log(item)
        if (item[0].item2 === params.river) {
            data.push(...item)
        }
    })
    data = data[0]
    console.log(data)
    res.send({
        data
    })
});
module.exports = router;