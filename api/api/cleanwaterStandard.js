// 讀取waterpool_CTSIdata.json裡的資料，以更新系統上的水庫卡爾森資料
var express = require('express');
var router = express.Router();

// 查詢淨水廠檢測標準
router.post('/', (req, res) => {
    var params = req.body;
    console.log(params.river)
    var data = require(`${global.URL}cleanwaterStandard.json`);
    res.send({
        data
    })
});
module.exports = router;