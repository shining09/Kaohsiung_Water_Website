// 讀取waterpool_CTSIdata.json裡的資料，以更新系統上的水庫卡爾森資料
var express = require('express');
var router = express.Router();

// 查詢快速查詢淨水廠資訊
router.post('/', (req, res) => {
    var params = req.body;
    console.log(params.river)
    var data = require(`${global.URL}cleanwater2.json`);
    res.send({
        data
    })
});
module.exports = router;